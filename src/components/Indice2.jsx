import React from "react";
import cheerio from "cheerio";

const generateIndexLinks = (html) => {
  const $ = cheerio.load(html);
  const indexLinks = [];

  $("h1, h2, h3").each((index, element) => {
    const headingText = $(element).text();
    const headingId = $(element).attr("id");
    indexLinks.push({ text: headingText, id: headingId });
  });

  return indexLinks;
};

const Indice2 = ({ apiResponse }) => {
  const indexLinks = generateIndexLinks(apiResponse);

  return (
    <div className='indice'>
      <h2>Índice</h2>
      <ul>
        {indexLinks.map((link) => (
          <li key={link.id}>
            <a href={`#${link.id}`}>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Indice2;
