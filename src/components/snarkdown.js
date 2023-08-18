// utils/parse.js
function parse(text) {
  if (!text) {
    return ""; // Return an empty string or an appropriate fallback
  }

  const lines = text.split("\n");
  const parsedHTML = lines
    .map((line) => {
      if (line.startsWith("- ")) {
        return `<li>${line.substring(2)}</li>`;
      } else if (line.startsWith("**") && line.endsWith("**")) {
        return `<strong>${line.substring(2, line.length - 2)}</strong>`;
      } else if (line.startsWith("_") && line.endsWith("_")) {
        return `<em>${line.substring(1, line.length - 1)}</em>`;
      } else if (line.startsWith("<u>") && line.endsWith("</u>")) {
        return `<u>${line.substring(3, line.length - 4)}</u>`;
      } else if (line.startsWith("~~") && line.endsWith("~~")) {
        return `<del>${line.substring(2, line.length - 2)}</del>`;
      } else if (line.match(/^\d+\.\s/)) {
        return `<ol><li>${line.substring(3)}</li></ol>`;
      } else if (line.startsWith("- ")) {
        return `<ul><li>${line.substring(2)}</li></ul>`;
      } else if (line.startsWith("```")) {
        return `<pre>${line.substring(3)}</pre>`;
      } else if (line.startsWith("[link](") && line.endsWith(")")) {
        const parts = line.substring(6, line.length - 1).split("](");
        return `<a href="${parts[1]}">${parts[0]}</a>`;
      } else if (line.startsWith(">")) {
        return `<blockquote>${line.substring(1)}</blockquote>`;
      } else if (line.startsWith("#")) {
        const level = line.match(/^#+/)[0].length;
        return `<h${level}>${line.substring(level).trim()}</h${level}>`;
      }
      return line;
    })
    .join("<br/>");

  return parsedHTML;
}

export default parse;
