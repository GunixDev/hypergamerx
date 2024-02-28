import { useEffect, useState } from 'preact/hooks';
import Iframeop from '../../utils/Iframeop.tsx';
import { ui } from '../../../i18n/data.ts';
import { defaultLang } from '../../../i18n/data_essential.ts';
import type React from 'preact/compat';
import type { CollectionEntry } from 'astro:content';
import type { Locale, Blog, TagsJsonArray, GameJsonArray, AuthorsJsonArray } from '../../../types.ts';

interface Props {
  locale: Locale;
  PropData: Blog;
  Games: GameJsonArray;
  Tags: TagsJsonArray;
  Authors: AuthorsJsonArray;
  PropsLimitPosts: any;
  PropsGamesPosts: any;
}

export default function Contenido({
  locale = 'en',
  PropData,
  Games = [],
  Tags = [],
  Authors = [],
  PropsLimitPosts = [],
  PropsGamesPosts = [],
}: Props) {
  const [view, setView] = useState(false);
  const [draft, setDraft] = useState(PropData.data.IsDraft);
  const [titulo, setTitulo] = useState(PropData.data.Title);
  const [viewTitulo, setViewTitulo] = useState(false);
  const [description, setDescription] = useState(PropData.data.Description);
  const [viewDescription, setViewDescription] = useState(false);
  const [author, setAuthor] = useState(PropData.data.Author);
  const [date, setDate] = useState(PropData.data.PubDate);
  const [update, setUpdate] = useState(PropData.data.UpdatedDate);
  const [keywords, setKeywords] = useState(PropData.data.Keywords);
  const [valuesEtiqueta, setValuesEtiqueta] = useState(Tags.map((tag) => tag.id));
  const [valuesVideojuego, setValuesVideojuego] = useState(Games.map((game) => game.id));
  const [image, setImage] = useState(PropData.data.Image);
  const [reference, setReference] = useState(PropData.data.Reference);
  const [content, setContent] = useState(PropData.body);
  const [contentRender, setContentRender] = useState(PropData.body);
  const [indice, setIndice] = useState(Array<any>());
  const [viewContent, setViewContent] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target as HTMLInputElement;
    if (checked) {
      setValuesEtiqueta((prevValues: any) => [...prevValues, value]);
    } else {
      setValuesEtiqueta((prevValues: any[]) => prevValues.filter((v: string) => v !== value));
    }
  };

  const handleCheckboxChangeVideojuego = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target as HTMLInputElement;
    if (checked) {
      setValuesVideojuego((prevValues) => [...prevValues, value]);
    } else {
      setValuesVideojuego((prevValues) => prevValues.filter((v) => v !== value));
    }
  };

  function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof (typeof ui)[typeof defaultLang]) {
      if (key in ui[lang]) {
        return ui[lang][key];
      } else {
        return ui[defaultLang][key];
      }
    };
  }

  const t = useTranslations(locale);

  function handleTitle(e: any) {
    setTitulo(e.target.value);
  }

  function handleViewTitulo(e: any) {
    setViewTitulo(!viewTitulo);
  }

  function handleDescription(e: any) {
    setDescription(e.target.value);
  }

  function handleViewDescription(e: any) {
    setViewDescription(!viewDescription);
  }

  function handleImage(e: any) {
    setImage(e.target.value);
  }

  function handleViewContent(e: any) {
    setViewContent(!viewContent);
  }

  function contentRenderizado(e: any) {
    setContent(e.target.value);
  }

  function handleKeywords(e: any) {
    setKeywords(e.target.value);
  }

  function handleDraft(e: any) {
    setDraft(!draft);
  }

  function handleReference(e: any) {
    setReference(e.target.value);
  }

  function ReplaceAll(data: any, exportdata: boolean) {
    let updateLin = data.replace(
      / geometry dash /gi,
      exportdata
        ? ' <Ref url="geometry-dash" text="Geometry Dash"/> '
        : ` <a href="/${locale}/blog/geometry-dash">Geometry Dash</a> `,
    );
    updateLin = updateLin.replace(
      / minecraft /gi,
      exportdata ? ' <Ref url="minecraft" text="Minecraft"/> ' : ` <a href="/${locale}/blog/minecraft">Minecraft</a> `,
    );
    updateLin = updateLin.replace(
      / valorant /gi,
      exportdata ? ' <Ref url="valorant" text="Valorant"/> ' : ` <a href="/${locale}/blog/valorant">Valorant</a> `,
    );

    Games.map((game) => {
      if (game.id === 'geometry-dash') {
      } else if (game.id === 'minecraft') {
      } else if (game.id === 'valorant') {
      } else if (game.id === 'lego-fortnite') {
        if (PropData.slug !== `${locale}/how-to-get-obsidian-in-fortnite-lego`) {
          updateLin = updateLin.replace(
            / obsidian /gi,
            exportdata
              ? ' <Ref url="how-to-get-obsidian-in-fortnite-lego" text="obsidian"/> '
              : ` <a href="/${locale}/blog/how-to-get-obsidian-in-fortnite-lego">obsidian</a> `,
          );
          updateLin = updateLin.replace(
            / obsidiana /gi,
            exportdata
              ? ' <Ref url="how-to-get-obsidian-in-fortnite-lego" text="obsidiana"/> '
              : ` <a href="/${locale}/blog/how-to-get-obsidian-in-fortnite-lego">obsidiana</a> `,
          );
        }
        if (PropData.slug !== `${locale}/how-to-get-amber-in-lego-fortnite`) {
          updateLin = updateLin.replace(
            / amber /gi,
            exportdata
              ? ' <Ref url="how-to-get-amber-in-lego-fortnite" text="amber"/> '
              : ` <a href="/${locale}/blog/how-to-get-amber-in-lego-fortnite">amber</a> `,
          );
          updateLin = updateLin.replace(
            / ámbar /gi,
            exportdata
              ? ' <Ref url="how-to-get-amber-in-lego-fortnite" text="ámbar"/> '
              : ` <a href="/${locale}/blog/how-to-get-amber-in-lego-fortnite">ámbar</a> `,
          );
        }
      }
    });

    if (exportdata) {
      return `${updateLin}`;
    } else {
      updateLin = updateLin.replace(/<Ref url="([^"]*)" text="([^"]*)"\/>/gi, ` <a href="/${locale}/blog/$1">$2</a> `);
      return `<p>${updateLin}</p>`;
    }
  }

  const handleExport = async () => {
    const lineas = content.split('\n');
    let res = lineas.map((linea) => {
      if (linea.startsWith('$$(') && linea.endsWith(')')) {
        return `<Imageresp image='${linea.slice(3, -1)}'/>`;
      } else if (linea.startsWith('!!(') && linea.endsWith(')')) {
        return `<Iframeop id='${linea.slice(3, -1)}'/>`;
      } else if (linea.startsWith('##') || linea.startsWith('###') || linea.startsWith('####')) {
        return linea;
      } else if (linea == '' || linea == null || linea == undefined) {
        return '';
      } else {
        return ReplaceAll(linea, true);
      }
    });

    let imports: any = [];

    if (
      res.join('\n').includes('<Imageresp') &&
      imports.includes("import Imageresp from '../../../components/utils/blog/Imageresp.astro';") === false &&
      res.join('\n').includes('import Imageresp from ') === false
    ) {
      imports.unshift("import Imageresp from '../../../components/utils/blog/Imageresp.astro';");
    }

    if (
      res.join('\n').includes('<Iframeop') &&
      imports.includes("import Iframeop from '../../../components/utils/blog/Iframeop.tsx';") === false &&
      res.join('\n').includes('import Iframeop from') === false
    ) {
      imports.unshift("import Iframeop from '../../../components/utils/blog/Iframeop.tsx';");
    }

    let borrador = res.join('\n');

    if (
      borrador.includes('<Ref') &&
      imports.includes("import Ref from '../../../components/utils/blog/Ref.astro';") === false &&
      res.join('\n').includes('import Ref from ') === false
    ) {
      imports.unshift(`import Ref from '../../../components/utils/blog/Ref.astro';`);
    }

    let resultado = borrador;

    const contentmdx = `---
IsDraft: ${draft}
Title: "${titulo}"
Reference: "${reference}"
Description: "${description}"
PubDate: ${date?.toISOString()}
${update ? `UpdatedDate: ${update?.toISOString()}` : ''}
Image: "${image}"
Author: ['Brayan-Cordova']
Tag: [${valuesEtiqueta.map((gen: any) => `${gen}`)}]
${valuesVideojuego[0] ? `Videojuego: [${valuesVideojuego.map((videojuego: any) => `'${videojuego}'`)}]` : ''}
Keywords: "${keywords}"
---
${imports.join('\n') + '\n\n' + resultado}`;

    const data = {
      slug: PropData.slug,
      nuevosDatos: contentmdx,
      lang: locale,
    };

    await fetch('/api/blogs', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    let contentupdate: any = content.split('\n');
    if (
      contentupdate[0].includes("import Ref from '../../../components/utils/blog/Ref.astro';") ||
      contentupdate[0].includes("import Iframeop from '../../../components/utils/blog/Iframeop.tsx'") ||
      contentupdate[0].includes("import Imageresp from '../../../components/utils/blog/Imageresp.astro';") ||
      contentupdate[0].includes == null ||
      contentupdate[0].includes == undefined ||
      contentupdate[0].includes == '' ||
      contentupdate[0].includes == ' ' ||
      contentupdate[0].includes == '" "' ||
      contentupdate[0].includes == '""' ||
      contentupdate[1].includes("import Ref from '../../../components/utils/blog/Ref.astro';") ||
      contentupdate[1].includes("import Iframeop from '../../../components/utils/blog/Iframeop.tsx'") ||
      contentupdate[1].includes("import Imageresp from '../../../components/utils/blog/Imageresp.astro';") ||
      contentupdate[1].includes == null ||
      contentupdate[1].includes == undefined ||
      contentupdate[1].includes == '' ||
      contentupdate[1].includes == ' ' ||
      contentupdate[1].includes == '" "' ||
      contentupdate[1].includes == '""'
    ) {
      contentupdate.shift();
    }

    for (let i = 0; i < 1; i++) {
      if (contentupdate[i].trim() === '') {
        contentupdate.splice(i, 1);
        i--;
      }
    }

    setContent(contentupdate.join('\n'));
    setContentRender(content);
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    if (date.getFullYear() !== currentYear || date.getMonth() !== currentMonth || date.getDate() !== currentDay) {
      setUpdate(new Date());
    }

    indice.fill('');

    let lineas = content.split('\n');
    let res = lineas.map((linea) => {
      if (linea === '' || linea === null || linea === undefined || linea === ' ' || linea === '" "' || linea === '""') {
        return '';
      } else if (linea.includes('####')) {
        indice.push({ depth: 4, text: linea.replace('####', ''), slug: linea.replace('####', '').replace(/ /g, '-') });
        return `<h4 id=${linea.replace('####', '').replace(/ /g, '-')}>${linea.replace('####', '')}</h4>`;
      } else if (linea.includes('###')) {
        indice.push({ depth: 3, text: linea.replace('###', ''), slug: linea.replace('###', '').replace(/ /g, '-') });
        return `<h3 id=${linea.replace('###', '').replace(/ /g, '-')}>${linea.replace('###', '')}</h3>`;
      } else if (linea.includes('##')) {
        indice.push({ depth: 2, text: linea.replace('##', ''), slug: linea.replace('##', '').replace(/ /g, '-') });
        return `<h2 id=${linea.replace('##', '').replace(/ /g, '-')}>${linea.replace('##', '')}</h2>`;
      } else if (linea.startsWith('$$(') && linea.endsWith(')')) {
        return `<img src="https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_479/${linea.slice(
          3,
          -1,
        )}" srcset="https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_160/${linea.slice(
          3,
          -1,
        )} 256w, https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_319/${linea.slice(
          3,
          -1,
        )} 512w, https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_479/${linea.slice(
          3,
          -1,
        )} 768w, https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_639/${linea.slice(
          3,
          -1,
        )} 1024w, https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_958/${linea.slice(
          3,
          -1,
        )} 1280w" width='479' height='270' alt="${linea.slice(
          3,
          -1,
        )}" decoding='async' loading='lazy' class='my-8 w-full h-auto mx-auto z-0 border-2 border-double border-slate-500'/>`;
      } else if (linea.startsWith('!!(') && linea.endsWith(')')) {
        return `<iframe src="https://www.youtube.com/embed/${linea.slice(
          3,
          -1,
        )}?rel=0" class="md:h-96 h-64 w-full md:w-10/12 mx-auto my-4 md:my-6" width="445" height="200" title=${linea.slice(
          3,
          -1,
        )} allowFullScreen={true} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>`;
      } else if (linea.startsWith('<Imageresp image=')) {
        return `<img src="https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_479/${linea.slice(
          18,
          -3,
        )}" srcset="https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_160/${linea.slice(
          18,
          -3,
        )} 256w, https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_319/${linea.slice(
          18,
          -3,
        )} 512w, https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_479/${linea.slice(
          18,
          -3,
        )} 768w, https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_639/${linea.slice(
          18,
          -3,
        )} 1024w, https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_958/${linea.slice(
          18,
          -3,
        )} 1280w" width='479' height='270' alt="${linea.slice(
          18,
          -3,
        )}" decoding='async' loading='lazy' class='my-8 w-full h-auto mx-auto z-0 border-2 border-double border-slate-500'/>`;
      } else if (linea.startsWith('<Iframeop client:load id=')) {
        return `<iframe src="https://www.youtube.com/embed/${linea.slice(
          26,
          -3,
        )}?rel=0" class="md:h-96 h-64 w-full md:w-10/12 mx-auto my-4 md:my-6" width="445" height="200" title=${linea.slice(
          26,
          -3,
        )} allowFullScreen={true} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>`;
      } else if (
        linea.startsWith("import Imageresp from '../../../components/utils/blog/Imageresp.astro';") ||
        linea.startsWith("import Ref from '../../../components/utils/blog/Ref.astro';") ||
        linea.startsWith("import Iframeop from '../../../components/utils/blog/Iframeop.tsx'")
      ) {
        return null;
      } else {
        return `<p>${ReplaceAll(linea, false)}</p>`;
      }
    });

    let resjoin = res.join('');

    setContentRender(resjoin);
  }, [content]);
  return (
    <>
      <div className='z-40 right-0 fixed' onClick={() => setView(!view)}>
        <p>Ver</p>
      </div>

      <div className={` z-50 right-0 mt-4 bg-black ${view ? 'fixed' : 'hidden'}`}>
        <span className=' mr-2'>Draft?</span>
        <input type='checkbox' id='draft' name='draft' value='draft' onChange={handleDraft} checked={draft} />
        <p>Imagen</p>
        <input type='text' onChange={handleImage} value={image} className='text-black text-xs w-full bg-white' />
        <p>Videojuegos</p>
        <input
          type='checkbox'
          id='geometry-dash'
          name='geometry-dash'
          value='geometry-dash'
          onChange={handleCheckboxChangeVideojuego}
          class={`${valuesVideojuego.includes('geometry-dash') ? 'opacity-50' : ''}`}
          checked={valuesVideojuego.includes('geometry-dash') ? true : false}></input>
        <label for='geometry-dash'> Geometry Dash</label>
        <input
          type='checkbox'
          id='minecraft'
          name='minecraft'
          value='minecraft'
          onChange={handleCheckboxChangeVideojuego}
          class={`${valuesVideojuego.includes('minecraft') ? 'opacity-50' : ''}`}
          checked={valuesVideojuego.includes('minecraft') ? true : false}></input>
        <label for='minecraft'> Minecraft</label>
        <input
          type='checkbox'
          id='valorant'
          name='valorant'
          value='valorant'
          onChange={handleCheckboxChangeVideojuego}
          class={`${valuesVideojuego.includes('valorant') ? 'opacity-50' : ''}`}
          checked={valuesVideojuego.includes('valorant') ? true : false}></input>
        <label for='valorant'> Valorant</label>
        <input
          type='checkbox'
          id='lego-fortnite'
          name='lego-fortnite'
          value='lego-fortnite'
          onChange={handleCheckboxChangeVideojuego}
          class={`${valuesVideojuego.includes('lego-fortnite') ? 'opacity-50' : ''}`}
          checked={valuesVideojuego.includes('lego-fortnite') ? true : false}></input>
        <label for='lego-fortnite'> LEGO Fortnite</label>
        <p>Keywords</p>
        <textarea
          type='text'
          onChange={handleKeywords}
          value={keywords}
          className='text-black text-xs w-full h-28 bg-white'
        />
        <p>Reference</p>
        <textarea
          type='text'
          onChange={handleReference}
          value={reference}
          className='text-black text-xs w-full h-16 bg-white'
        />
        <button onClick={handleExport}>Exportar MDX</button>
      </div>

      <div className='lg:w-11/12 w-[99%] md:m-auto my-8 mt-12 sm:my-10'>
        <div className='sm:grid sm:grid-cols-7 sm:gap-4'>
          <div className='sm:col-span-5 relative mx-2 sm:mx-4'>
            <h1
              className={`md:text-5xl md:mt-10 text-slate-400 font-bold break-words ls:max-sm:text-lg sm:max-md:text-xl ${
                !viewTitulo ? 'block' : 'hidden'
              }`}
              onClick={handleViewTitulo}>
              {titulo}
            </h1>
            <textarea
              type='text'
              onChange={handleTitle}
              maxLength={70}
              minLength={40}
              rows={2}
              className={`md:text-5xl md:mt-10 text-slate-400 font-bold break-words ls:max-sm:text-lg sm:max-md:text-xl bg-transparent w-full pb-2 ${
                viewTitulo ? 'block' : 'hidden'
              }`}
              onfocusout={handleViewTitulo}
              value={titulo}
            />
            <div className='md:my-2 ls:max-md:my-0 text-slate-700'>
              <p className='text-gray-300 text-xs md:text-sm lg:max-md:text-xs font-extralight md:font-normal'>
                {t('article.creadorpor')} <strong>{/*Poner Author*/}</strong> {t('article.eldiade')}
                <span>
                  {' '}
                  <time datetime={new Date().toISOString()}>
                    {date?.toLocaleDateString(locale, {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>{' '}
                  {update ? (
                    <span class=' opacity-70'>
                      {' '}
                      ({t('article.ultimaactualizacion')}
                      {': '}
                      <time datetime={new Date().toISOString()}>
                        {update?.toLocaleDateString(locale, {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                      )
                    </span>
                  ) : null}
                </span>
              </p>
            </div>
            <p className='text-xs my-1 md:text-sm md:my-2 text-slate-300 gap-2'>
              {Tags.map((tag: any) => (
                <span className='mx-2' title={locale === 'es' ? tag.Spanish : tag.English}>
                  {locale === 'es' ? tag?.Name : tag?.NameEnglish}
                </span>
              ))}
              <input
                type='checkbox'
                id='Guia'
                name='Guia'
                value='Guia'
                onChange={handleCheckboxChange}
                class={`${valuesEtiqueta.includes('Guia') ? 'opacity-10' : ''}`}></input>
              <label for='Guia' class={`${valuesEtiqueta.includes('Guia') ? 'hidden' : ''}`}>
                {' '}
                {t('article.guia')}
              </label>
              <input
                type='checkbox'
                id='Noticia'
                name='Noticia'
                value='Noticia'
                onChange={handleCheckboxChange}
                class={`${valuesEtiqueta.includes('Noticia') ? 'opacity-10' : ''}`}></input>
              <label for='Noticia' class={`${valuesEtiqueta.includes('Noticia') ? 'hidden' : ''}`}>
                {' '}
                {t('article.noticia')}
              </label>
              <input
                type='checkbox'
                id='Curiosidades'
                name='Curiosidades'
                value='Curiosidades'
                onChange={handleCheckboxChange}
                class={`${valuesEtiqueta.includes('Curiosidades') ? 'opacity-10' : ''}`}></input>
              <label for='Curiosidades' class={`${valuesEtiqueta.includes('Curiosidades') ? 'hidden' : ''}`}>
                {' '}
                {t('article.curiosidades')}
              </label>
              <input
                type='checkbox'
                id='Reseña'
                name='Reseña'
                value='Reseña'
                onChange={handleCheckboxChange}
                class={`${valuesEtiqueta.includes('Reseña') ? 'opacity-10' : ''}`}></input>
              <label for='Reseña' class={`${valuesEtiqueta.includes('Reseña') ? 'hidden' : ''}`}>
                {' '}
                {t('article.resenadevieojuego')}
              </label>
            </p>

            <p
              onClick={handleViewDescription}
              className={`text-xs md:text-xl text-gray-400 ${!viewDescription ? 'block' : 'hidden'}`}>
              {description}
            </p>
            <textarea
              type='text'
              maxLength={160}
              minLength={25}
              onChange={handleDescription}
              onfocusout={handleViewDescription}
              value={description}
              className={`text-xs md:text-xl text-gray-400 bg-transparent w-full ${
                viewDescription ? 'block' : 'hidden'
              }`}
            />
            {valuesEtiqueta.includes('Reseña') ? (
              <Iframeop id={Games[0].TrailerVideo} />
            ) : image !== null ? (
              <img
                src={`https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_479/${image}`}
                srcset={`https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_160/${image} 256w,
            https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_319/${image} 512w,
            https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_479/${image} 768w,
            https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_639/${image} 1024w,
      https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_958/${image} 1280w`}
                width='479'
                height='270'
                alt='imagen de prueba'
                className='my-8 w-full h-auto mx-auto'
              />
            ) : null}
            <div className='bg-slate-950 md:p-6 ls:max-md:p-4 rounded-2xl w-fit mt-4 ls:max-sm:hidden'>
              <div class='bg-slate-950 rounded-2xl w-fit'>
                <h2 class='align-middle font-bold text-white text-center text-2xl'>{t('article.indice')}</h2>
                <div class='grid grid-cols-1'>
                  {indice.map((indice: any) => {
                    return indice.depth === 2 ? (
                      <a
                        hreflang={locale}
                        href={`#${indice.slug}`}
                        class='text-xl font-bold text-slate-100 hover:text-slate-300 duration-300 p-1'>
                        <ol class=' list-disc ml-2'>
                          <li>{indice.text}</li>
                        </ol>
                      </a>
                    ) : indice.depth === 3 ? (
                      <a
                        hreflang={locale}
                        href={`#${indice.slug}`}
                        class='text-lg ml-4 font-medium text-gray-300 hover:text-white duration-300 p-1'>
                        <ol>
                          <li class=' list-none'>{indice.text}</li>
                        </ol>
                      </a>
                    ) : indice.depth === 4 ? (
                      <a
                        hreflang={locale}
                        href={`#${indice.slug}`}
                        class='text-sm ml-8 text-gray-400 font-medium hover:text-slate-300 duration-300 p-1'>
                        <ol>
                          <li class=' list-none'>{indice.text}</li>
                        </ol>
                      </a>
                    ) : null;
                  })}
                </div>
              </div>
            </div>
            <div
              className={`contenido ${viewContent ? 'hidden' : ''}`}
              onClick={handleViewContent}
              dangerouslySetInnerHTML={{ __html: contentRender }}></div>
            <textarea
              type='text'
              onChange={contentRenderizado}
              value={content}
              onfocusout={handleViewContent}
              className={`w-full h-96 bg-transparent contenido whitespace-pre-line ${
                !viewContent ? 'hidden' : ''
              }`}></textarea>
          </div>
          <div className='h-full ls:max-sm:w-full relative sm:col-span-2'>
            <div
              className={`h-full relative sm:col-span-2 ${
                valuesEtiqueta.includes('Reseña')
                  ? 'ls:max-sm:grid ls:max-sm:grid-cols-5 ls:max-sm:p-2 ls:max-sm:gap-1'
                  : ''
              }`}>
              {valuesEtiqueta.includes('Reseña') ? (
                <div className='bg-slate-950 p-2 md:p-4 rounded-2xl w-full h-fit ls:max-sm:col-span-3'>
                  <p className='text-sm text-slate-400 text-center font-bold md:text-xl xl:text-2xl'>
                    {Games[0]?.Name}
                  </p>

                  {
                    <img
                      src={`https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_186/${Games[0].CoverImage}`}
                      srcset={`https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_62/${Games[0].CoverImage} 256w,
https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_124/${Games[0].CoverImage} 512w,
https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_186/${Games[0].CoverImage} 768w,
https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_248/${Games[0].CoverImage} 1024w,
https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_310/${Games[0].CoverImage} 1280w`}
                      width='186'
                      height='230'
                      alt={Games[0]?.Name}
                      decoding='async'
                      loading='lazy'
                      className='my-1 sm:my-4 w-80 h-56 md:h-64 lg:h-96 mx-auto object-cover'
                    />
                  }

                  {Games[0].Stars && (
                    <div class='mx-auto ml-1 lg:ml-3'>
                      <span class='inline-block align-middle mr-0 lg:mr-2 text-slate-300 text-xs lg:text-base'>
                        {t('article.estrellas')}:
                      </span>
                      <span class='ml-1 lg:ml-1 text-xs sm:text-base align-middle text-slate-400'>
                        {Games[0].Stars + '  '}
                      </span>
                      {Games[0].Stars >= 4.5 ? (
                        <>
                          <img
                            src='/icons/star-fill.svg'
                            class='inline-block align-middle text-slate-400 ls:max-sm:hidden'
                            alt='Star Icon'
                          />
                          <img
                            src='/icons/star-fill.svg'
                            class='inline-block align-middle text-slate-400 ls:max-sm:hidden'
                            alt='Star Icon'
                          />
                          <img
                            src='/icons/star-fill.svg'
                            class='inline-block align-middle text-slate-400 ls:max-sm:hidden'
                            alt='Star Icon'
                          />
                          <img
                            src='/icons/star-fill.svg'
                            class='inline-block align-middle text-slate-400 ls:max-sm:hidden'
                            alt='Star Icon'
                          />
                          {Games[0].Stars >= 5 ? (
                            <img
                              src='/icons/star-fill.svg'
                              class='inline-block align-middle text-slate-400 ls:max-sm:hidden'
                              alt='Star Icon'
                            />
                          ) : (
                            <img
                              src='/icons/star-half.svg'
                              class='inline-block align-middle text-slate-400 ls:max-sm:hidden'
                              alt='Star Icon'
                            />
                          )}
                        </>
                      ) : Games[0].Stars >= 3.5 ? (
                        <>
                          <img
                            src='/icons/star-fill.svg'
                            class='inline-block align-middle text-slate-400 ls:max-sm:hidden'
                            alt='Star Icon'
                          />
                          <img
                            src='/icons/star-fill.svg'
                            class='inline-block align-middle text-slate-400 ls:max-sm:hidden'
                            alt='Star Icon'
                          />
                          <img
                            src='/icons/star-fill.svg'
                            class='inline-block align-middle text-slate-400 ls:max-sm:hidden'
                            alt='Star Icon'
                          />
                          {Games[0].Stars >= 4 ? (
                            <img
                              src='/icons/star-fill.svg'
                              class='inline-block align-middle text-slate-400 ls:max-sm:hidden'
                              alt='Star Icon'
                            />
                          ) : (
                            <img
                              src='/icons/star-half.svg'
                              class='inline-block align-middle text-slate-400 ls:max-sm:hidden'
                              alt='Star Icon'
                            />
                          )}
                          <img
                            src='/icons/star.svg'
                            class='inline-block align-middle text-slate-400 ls:max-sm:hidden'
                            alt='Star Icon'
                          />
                        </>
                      ) : Games[0].Stars >= 2.5 ? (
                        <>
                          <img
                            src='/icons/star-fill.svg'
                            class='inline-block align-middle text-slate-400 ls:max-sm:hidden'
                            alt='Star Icon'
                          />
                          <img
                            src='/icons/star-fill.svg'
                            class='inline-block align-middle text-slate-400 ls:max-sm:hidden'
                            alt='Star Icon'
                          />
                          {Games[0].Stars >= 3 ? (
                            <img
                              src='/icons/star-fill.svg'
                              class='inline-block align-middle text-slate-400 ls:max-sm:hidden'
                              alt='Star Icon'
                            />
                          ) : (
                            <img
                              src='/icons/star-half.svg'
                              class='inline-block align-middle text-slate-400 ls:max-sm:hidden'
                              alt='Star Icon'
                            />
                          )}
                          <img
                            src='/icons/star.svg'
                            class='inline-block align-middle text-slate-400 ls:max-sm:hidden'
                            alt='Star Icon'
                          />
                          <img
                            src='/icons/star.svg'
                            class='inline-block align-middle text-slate-400 ls:max-sm:hidden'
                            alt='Star Icon'
                          />
                        </>
                      ) : Games[0].Stars >= 1.5 ? (
                        <>
                          <img
                            src='/icons/star-fill.svg'
                            class='inline-block align-middle text-slate-400 ls:max-sm:hidden'
                            alt='Star Icon'
                          />
                          {Games[0].Stars >= 2 ? (
                            <img
                              src='/icons/star-fill.svg'
                              class='inline-block align-middle text-slate-400 ls:max-sm:hidden'
                              alt='Star Icon'
                            />
                          ) : (
                            <img
                              src='/icons/star-half.svg'
                              class='inline-block align-middle text-slate-400 ls:max-sm:hidden'
                              alt='Star Icon'
                            />
                          )}
                          <img
                            src='/icons/star.svg'
                            class='inline-block align-middle text-slate-400 ls:max-sm:hidden'
                            alt='Star Icon'
                          />
                          <img
                            src='/icons/star.svg'
                            class='inline-block align-middle text-slate-400 ls:max-sm:hidden'
                            alt='Star Icon'
                          />
                          <img
                            src='/icons/star.svg'
                            class='inline-block align-middle text-slate-400 ls:max-sm:hidden'
                            alt='Star Icon'
                          />
                        </>
                      ) : Games[0].Stars >= 0.5 ? (
                        <>
                          {Games[0].Stars >= 1 ? (
                            <img
                              src='/icons/star-fill.svg'
                              class='inline-block align-middle text-slate-400 ls:max-sm:hidden'
                              alt='Star Icon'
                            />
                          ) : (
                            <img
                              src='/icons/star-half.svg'
                              class='inline-block align-middle text-slate-400 ls:max-sm:hidden'
                              alt='Star Icon'
                            />
                          )}
                          <img
                            src='/icons/star.svg'
                            class='inline-block align-middle text-slate-400 ls:max-sm:hidden'
                            alt='Star Icon'
                          />
                          <img
                            src='/icons/star.svg'
                            class='inline-block align-middle text-slate-400 ls:max-sm:hidden'
                            alt='Star Icon'
                          />
                          <img
                            src='/icons/star.svg'
                            class='inline-block align-middle text-slate-400 ls:max-sm:hidden'
                            alt='Star Icon'
                          />
                          <img
                            src='/icons/star.svg'
                            class='inline-block align-middle text-slate-400 ls:max-sm:hidden'
                            alt='Star Icon'
                          />
                        </>
                      ) : (
                        <>
                          <img
                            src='/icons/star.svg'
                            class='inline-block align-middle text-slate-400 ls:max-sm:hidden'
                            alt='Star Icon'
                          />
                          <img
                            src='/icons/star.svg'
                            class='inline-block align-middle text-slate-400 ls:max-sm:hidden'
                            alt='Star Icon'
                          />
                          <img
                            src='/icons/star.svg'
                            class='inline-block align-middle text-slate-400 ls:max-sm:hidden'
                            alt='Star Icon'
                          />
                          <img
                            src='/icons/star.svg'
                            class='inline-block align-middle text-slate-400 ls:max-sm:hidden'
                            alt='Star Icon'
                          />
                          <img
                            src='/icons/star.svg'
                            class='inline-block align-middle text-slate-400 ls:max-sm:hidden'
                            alt='Star Icon'
                          />
                        </>
                      )}
                    </div>
                  )}

                  <p className='ml-1 lg:ml-3 text-xs lg:text-base text-slate-300'>
                    {t('article.lanzamiento')}:{' '}
                    <span className='text-slate-400 text-xs sm:text-base'>
                      <time datetime={Games[0].DateLaunch?.toISOString()}>
                        {date?.toLocaleDateString(locale, {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                    </span>
                  </p>
                  <p className='ml-1 lg:ml-3 text-xs lg:text-base text-slate-300'>
                    {t('article.multijugador')}:{' '}
                    <span class='text-slate-400'>{Games[0].Multijugador ? t('article.yes') : t('article.no')}</span>
                  </p>
                  <p className='ml-1 lg:ml-3 text-xs lg:text-base text-slate-300 hover:text-slate-100 duration-300'>
                    {Tags.some((tag) => tag.id === 'Reseña') && Games[0].TrailerVideo ? (
                      <>
                        <a target='_blank' href={Games[0].TrailerVideo}>
                          {t('article.vertrailer')}{' '}
                        </a>
                        <img
                          width={12}
                          height={12}
                          src='/icons/external.svg'
                          className='align-middle mx-1 inline-block'
                          alt='External'
                        />
                      </>
                    ) : null}
                  </p>
                </div>
              ) : null}
              <div
                className={`bg-slate-950 mb-1 md:p-5 ls:max-md:p-3 rounded-2xl md:mt-10 ${
                  valuesEtiqueta.includes('Reseña') ? 'ls:max-sm:col-span-2' : ' w-11/12 mx-auto'
                }`}>
                <h2 className='md:text-lg font-bold ls:max-md:text-base text-white'>
                  {t('article.articuclosreciente')}
                </h2>
                {PropsLimitPosts.map(
                  (post: {
                    slug: string | any[];
                    data: {
                      Title:
                        | string
                        | number
                        | bigint
                        | boolean
                        | object
                        | React.ReactNode[]
                        | React.ReactElement<any>
                        | null
                        | undefined;
                      Description:
                        | string
                        | number
                        | bigint
                        | boolean
                        | object
                        | React.ReactNode[]
                        | React.ReactElement<any>
                        | null
                        | undefined;
                    };
                  }) => {
                    return (
                      <a href={`/${locale}/blog/${post.slug.slice(3)}/`} hreflang={locale}>
                        <div class='mt-4 group'>
                          <h3 class='text-sm ls:max-md:text-xs text-slate-300 font-bold group-hover:text-slate-200 duration-500'>
                            {post?.data.Title}
                          </h3>
                          <p class='md:text-xs ls:max-md:hidden mt-1 text-slate-400 font-semibold group-hover:text-slate-300 duration-500'>
                            {post?.data.Description}
                          </p>
                        </div>
                      </a>
                    );
                  },
                )}
              </div>
              <div
                className={`bg-slate-950 md:p-5 ls:max-md:p-3 rounded-2xl ${
                  valuesEtiqueta.includes('Reseña') ? ' ls:max-sm:col-span-6' : ' w-11/12 mx-auto'
                } ${Games[0]?.Name ? '' : 'hidden'}`}>
                <h2 className='md:text-lg font-bold ls:max-md:text-base text-white'>
                  {t('article.articulosde')} {Games[0]?.Name}
                </h2>
                {PropsGamesPosts.map(
                  (post: {
                    slug: string | any[];
                    data: {
                      Title:
                        | string
                        | number
                        | bigint
                        | boolean
                        | object
                        | React.ReactNode[]
                        | React.ReactElement<any>
                        | null
                        | undefined;
                      Description:
                        | string
                        | number
                        | bigint
                        | boolean
                        | object
                        | React.ReactNode[]
                        | React.ReactElement<any>
                        | null
                        | undefined;
                    };
                  }) => (
                    <a href={`/${locale}/blog/${post.slug.slice(3)}/`} hreflang={locale}>
                      <div class='mt-4 group'>
                        <h3 class='text-sm ls:max-md:text-xs text-slate-300 font-bold group-hover:text-slate-200 duration-500'>
                          {post?.data.Title}
                        </h3>
                        <p class='md:text-xs ls:max-md:hidden mt-1 text-slate-400 font-semibold group-hover:text-slate-300 duration-500'>
                          {post?.data.Description}
                        </p>
                      </div>
                    </a>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
