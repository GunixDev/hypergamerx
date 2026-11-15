import type { CookieConsentConfig } from "vanilla-cookieconsent";

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
    gtag: (...args: any[]) => void;
  }
}

export const config: CookieConsentConfig = {
  root: "#cc-container",
  guiOptions: {
    consentModal: {
      layout: "box wide",
      position: "bottom left",
      equalWeightButtons: false,
      flipButtons: false
    },
    preferencesModal: {
      layout: "bar",
      position: "left",
      equalWeightButtons: false,
      flipButtons: false
    }
  },
  categories: {
    necessary: {
      readOnly: true
    },
    analytics: {
      enabled: true,
      services: {
        ga: {
          label: "Google Analytics",
          onAccept: () => {
            const waitForGtag = setInterval(() => {
              if (window.gtag) {
                clearInterval(waitForGtag);
                console.log("ga4 granted");
                window.gtag("consent", "update", {
                  ad_storage: "granted",
                  ad_user_data: "granted",
                  ad_personalization: "granted",
                  analytics_storage: "granted",
                });
              }
            }, 100);

            // Clear interval after 5 seconds to prevent infinite loop
            setTimeout(() => clearInterval(waitForGtag), 5000);
          },
          onReject: () => {
            console.log("ga4 rejected");
          },
        }
      }
    }
  },
  language: {
    default: "es",
    autoDetect: "document",
    translations: {
      es: {
        consentModal: {
          title: "Hola viajero, es la hora de las galletas!",
          description: "Hola navegante para mejorar nuestro sistema de análisis necesitamos que aceptes unas galletas para mejorar nuestros artículos y disfrute de una mejor experiencia.",
          acceptAllBtn: "Aceptar todo",
          acceptNecessaryBtn: "Rechazar todo",
          showPreferencesBtn: "Gestionar preferencias",
          footer: "<a href='/es/avisos-y-politicas/privacidad/' hreflang='es'>Política de Privacidad</a>\n<a href='/es/avisos-y-politicas/politica-de-cookies/' hreflang='es'>Política de Cookies</a>"
        },
        preferencesModal: {
          title: "Preferencias de Consentimiento",
          acceptAllBtn: "Aceptar todo",
          acceptNecessaryBtn: "Rechazar todo",
          savePreferencesBtn: "Guardar preferencias",
          closeIconLabel: "Cerrar modal",
          serviceCounterLabel: "Servicios",
          sections: [
            {
              title: "Uso de Cookies",
              description: "El uso de cookies nos servirá mucho para la optimización y mejora de nuestros artículos de videojuegos, es importante tener en cuenta que no se tomara información específica de cada uno usuario, se toma la información de manera anónima."
            },
            {
              title: "Cookies Estrictamente Necesarias <span class=\"pm__badge\">Siempre Habilitado</span>",
              description: "Algunos cookies son necesarios para el uso de la página web, estas cookies no rastrearán información sobre lo que hagas en la página web. Estos cookies están activados por predeterminado.",
              linkedCategory: "necessary"
            },
            {
              title: "Cookies Analíticas",
              description: "El Google Analytics nos sirve para poder rastrear información sobre nuestros usuarios de manera anónima, detecta de que país entro a la página web, desde que dispositivo ingreso, entre otra información. Esta información la utilizamos para analizar que artículos de videojuegos vamos a subir y mejorarlos.",
              linkedCategory: "analytics"
            },
            {
              title: "Más información",
              description: "Para cualquier consulta en relación con mi política de cookies y sus opciones, por favor <a href='/es/conocenos/contacto/' hreflang='es'>contactanos</a>."
            }
          ]
        }
      }
    }
  },
  disablePageInteraction: true
};
