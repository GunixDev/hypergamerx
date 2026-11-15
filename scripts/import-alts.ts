import { DatabaseSync } from "node:sqlite";
import { copyFileSync, writeFileSync } from "node:fs";
import { imagesData } from "../src/data/images";

const DB_PATH = "./data.db";
const WRITE = process.argv.includes("--write");

const altByFile = new Map<string, string>(imagesData.map((i) => [i.id, i.alt]));
const looksLikeFile = (s: string) => /\.(webp|png|jpe?g|gif|avif)$/i.test(s);
const isPlaceholder = (alt: unknown) => typeof alt !== "string" || alt.trim() === "" || altByFile.has(alt) || looksLikeFile(alt);
const sqlStr = (s: string) => `'${s.replace(/'/g, "''")}'`;

let patched = 0;
const unmatched = new Set<string>();

// Recorre cualquier JSON y corrige los objetos de imagen
function patch(node: unknown): unknown {
  if (Array.isArray(node)) return node.map(patch);
  if (!node || typeof node !== "object") return node;

  const obj: Record<string, unknown> = { ...(node as Record<string, unknown>) };
  for (const key of Object.keys(obj)) obj[key] = patch(obj[key]);

  const isImage = obj._type === "image" || (typeof obj.filename === "string" && ("mimeType" in obj || "provider" in obj));
  if (!isImage || !isPlaceholder(obj.alt)) return obj;

  const candidates = [obj.alt, obj.filename, (obj.asset as { filename?: unknown } | undefined)?.filename].filter((v): v is string => typeof v === "string");
  const file = candidates.find((v) => altByFile.has(v));

  if (file) {
    const alt = altByFile.get(file)!;
    if (obj.alt !== alt) {
      obj.alt = alt;
      patched++;
    }
  } else if (typeof obj.alt === "string" && looksLikeFile(obj.alt)) {
    unmatched.add(obj.alt);
  }
  return obj;
}

if (WRITE) copyFileSync(DB_PATH, `${DB_PATH}.bak`);

const db = new DatabaseSync(DB_PATH);
const tables = db.prepare("SELECT name, sql FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%' AND name NOT LIKE '_cf_%'").all() as { name: string; sql: string }[];

const remoteSql: string[] = [];
let mediaRows = 0;

for (const { name, sql } of tables) {
  if (/VIRTUAL TABLE/i.test(sql) || name.includes("_fts")) continue;

  const cols = (db.prepare(`PRAGMA table_info("${name}")`).all() as { name: string }[]).map((c) => c.name);

  // 1) Tabla de medios: columnas filename + alt
  if (cols.includes("filename") && cols.includes("alt")) {
    for (const [file, alt] of altByFile) {
      const hit = db.prepare(`SELECT COUNT(*) AS n FROM "${name}" WHERE filename = ? AND (alt IS NULL OR alt = '' OR alt = filename)`).get(file) as { n: number };
      if (!hit.n) continue;
      mediaRows += hit.n;
      if (WRITE) db.prepare(`UPDATE "${name}" SET alt = ? WHERE filename = ? AND (alt IS NULL OR alt = '' OR alt = filename)`).run(alt, file);
      remoteSql.push(`UPDATE "${name}" SET alt = ${sqlStr(alt)} WHERE filename = ${sqlStr(file)} AND (alt IS NULL OR alt = '' OR alt = filename);`);
    }
  }

  // 2) Cualquier columna con JSON que contenga imágenes (artículos, portadas, revisiones)
  const hasId = cols.includes("id");
  const rows = db.prepare(`SELECT rowid AS _rid, * FROM "${name}"`).all() as Record<string, unknown>[];

  for (const row of rows) {
    for (const col of cols) {
      const val = row[col];
      if (typeof val !== "string" || !(val.includes('"image"') || val.includes('"filename"'))) continue;

      let parsed: unknown;
      try {
        parsed = JSON.parse(val);
      } catch {
        continue;
      }

      const before = patched;
      const next = patch(parsed);
      if (patched === before) continue;

      const json = JSON.stringify(next);
      if (WRITE) db.prepare(`UPDATE "${name}" SET "${col}" = ? WHERE rowid = ?`).run(json, row._rid as number);
      if (hasId) remoteSql.push(`UPDATE "${name}" SET "${col}" = ${sqlStr(json)} WHERE id = ${sqlStr(String(row.id))};`);
    }
  }
}

writeFileSync("alt-updates.sql", remoteSql.join("\n"));

console.log(WRITE ? "✔ Cambios aplicados a data.db (copia en data.db.bak)" : "Simulación: no se escribió nada");
console.log(`Alt corregidos en JSON: ${patched}`);
console.log(`Archivos de la tabla de medios con alt nuevo: ${mediaRows}`);
console.log(`Sentencias para Cloudflare: ${remoteSql.length} → alt-updates.sql`);
if (unmatched.size) console.log("Imágenes sin alt en tu lista:", [...unmatched]);
