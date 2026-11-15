import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  const { pathname } = context.url;
  
  const cookieHeader = context.request.headers.get("cookie") ?? "";
  const hasOtherCookies = cookieHeader
    .split(";")
    .map((c) => c.trim())
    .filter(Boolean)
    .some((c) => !c.startsWith("_ga") && !c.startsWith("_gid") && !c.startsWith("_gat"));

  const cacheable =
    context.request.method === "GET" &&
    response.status === 200 &&
    !pathname.startsWith("/_emdash") &&
    !pathname.startsWith("/_actions") &&
    !hasOtherCookies &&
    !response.headers.has("set-cookie") &&
    !response.headers.has("cache-control") &&
    (response.headers.get("content-type") ?? "").includes("text/html");

  if (!cacheable) return response;

  const headers = new Headers(response.headers);
  headers.set("Cache-Control", "public, max-age=60");

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
});