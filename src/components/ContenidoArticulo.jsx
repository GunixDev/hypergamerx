import React from "react";
import cheerio from "cheerio";

const transformOembedToIframe = (html) => {
  const $ = cheerio.load(html);

  $("oembed").each((index, element) => {
    const oembedUrl = $(element).attr("url");
    const iframeCode = `<iframe width="560" height="315" src="${oembedUrl}" frameborder="0" allowfullscreen></iframe>`;
    $(element).replaceWith(iframeCode);
  });

  return $.html();
};

const addIdsToHeadings = (html) => {
  const modifiedHtml = transformOembedToIframe(html);
  const $ = cheerio.load(modifiedHtml);
  const headingCounts = { h2: 0, h3: 0, h4: 0 };

  $("h2, h3, h4").each((index, element) => {
    const headingText = $(element).text();
    const headingType = element.name;
    headingCounts[headingType]++;
    const headingId = `text${headingType}${headingCounts[headingType]}`;

    $(element).attr("id", headingId);
  });

  return $.html();
};

const generateIndexLinks = (html) => {
  const $ = cheerio.load(html);
  const indexLinks = [];

  $("h2, h3, h4").each((index, element) => {
    const headingText = $(element).text();
    const headingId = $(element).attr("id");
    const headingType = element.name;
    indexLinks.push({ text: headingText, id: headingId, type: headingType });
  });

  return indexLinks;
};

const ContenidoArticulo = ({ apiResponse }) => {
  const modifiedHtml = addIdsToHeadings(apiResponse);

  return <div className='contenido' dangerouslySetInnerHTML={{ __html: modifiedHtml }} />;
};

const Indice2 = ({ apiResponse }) => {
  const modifiedHtml = addIdsToHeadings(apiResponse); // Aquí se procesa el HTML
  const indexLinks = generateIndexLinks(modifiedHtml); // Se usa el HTML procesado

  return (
    <div className='indice'>
      <h2 className='md:text-xl ls:max-md:text-base text-center mb-2 text-white font-bold'>Índice</h2>
      <ul>
        {indexLinks.map((link) => (
          <li key={link.id} className={`${link.type === "h2" ? "list-inside list-disc" : null} mb-2`}>
            <a
              href={`#${link.id}`}
              className={`${
                link.type === "h2"
                  ? "text-slate-300"
                  : link.type === "h3"
                  ? "text-slate-400 ml-4"
                  : "text-slate-500 ml-8"
              } break-words duration-200 hover:text-white`}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { ContenidoArticulo, Indice2 };
