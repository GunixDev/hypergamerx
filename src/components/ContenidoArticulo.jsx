import React from "react";
import cheerio from "cheerio";

const addIdsToHeadings = (html) => {
  const $ = cheerio.load(html);
  const headingCounts = { h1: 0, h2: 0, h3: 0 };

  $("h1, h2, h3").each((index, element) => {
    const headingText = $(element).text();
    const headingType = element.name;
    headingCounts[headingType]++;
    const headingId = `text${headingType}${headingCounts[headingType]}`;

    // Remove existing text content and add new content with the ID
    $(element).attr("id", headingId);
  });

  return $.html();
};

const ContenidoArticulo = ({ apiResponse }) => {
  const modifiedHtml = addIdsToHeadings(apiResponse);

  return <div className='contenido' dangerouslySetInnerHTML={{ __html: modifiedHtml }} />;
};

const generateIndexLinks = (html) => {
  const $ = cheerio.load(addIdsToHeadings(html));
  const indexLinks = [];

  $("h1, h2, h3").each((index, element) => {
    const headingText = $(element).text();
    const headingId = $(element).attr("id");
    const headingType = element.name;
    indexLinks.push({ text: headingText, id: headingId, type: headingType });
  });

  return indexLinks;
};

const Indice2 = ({ apiResponse }) => {
  const indexLinks = generateIndexLinks(apiResponse);

  return (
    <div className='indice'>
      <h2 className='md:text-xl ls:max-md:text-base text-center mb-2 text-white font-bold'>Índice</h2>
      <ul>
        {indexLinks.map((link) => (
          <li key={link.id} className={`${link.type === "h1" ? "list-inside list-disc" : null} mb-2`}>
            <a
              href={`#${link.id}`}
              className={`${
                link.type === "h1"
                  ? "text-slate-300"
                  : link.type === "h2"
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
