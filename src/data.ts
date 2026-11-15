import Twitter from "@public/logos/twitter.svg";
import Facebook from "@public/logos/facebook.svg";
import Flipboard from "@public/logos/flipboard.svg";

export const NAV_ITEMS = [
  {
    name: "Novedades",
    href: "/blog/pagina/1",
  },
  {
    name: "Noticias",
    href: "/noticias/1",
  },
  {
    name: "Curiosidades",
    href: "/curiosidades/1",
  },
  {
    name: "Guías",
    href: "/guias/1",
  },
  {
    name: "Juegos",
    href: "/juegos",
  },
];

export const NETWORKS = [
  {
    name: "X",
    icon: Twitter,
    url: "https://x.com/HyperGamerX_",
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/Hypergamerx",
  },
  {
    name: "Flipboard",
    icon: Flipboard,
    url: "https://flipboard.com/@HyperGamerX",
  },
];

export const FOOTER = [
  {
    title: "Avisos y Políticas",
    items: [
      {
        name: "Política de Privacidad",
        href: "/avisos-y-politicas/privacidad",
      },
      {
        name: "Política de Cookies",
        href: "/avisos-y-politicas/politica-de-cookies",
      },
      {
        name: "Aviso Legal",
        href: "/avisos-y-politicas/aviso-legal",
      },
      {
        name: "Editar Cookies",
        href: "cookies"
      },
    ],
  },
  {
    title: "Conócenos",
    items: [
      {
        name: "Sobre HyperGamerX",
        href: "/conocenos/sobre-hypergamerx",
      },
      {
        name: "Donaciones",
        href: "https://www.paypal.com/donate/?hosted_button_id=K7PXSGWS98LXQ",
      },
      {
        name: "Contacto/Publicidad",
        href: "/conocenos/contacto",
      },
    ],
  },
];
