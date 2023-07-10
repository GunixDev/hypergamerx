import { useRouter } from "next/router";

export const FormatearFecha = (fecha) => {
  const locale = useRouter();
  const fechaNueva = new Date(fecha);

  const opciones = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  // Formatear la fecha en el idioma especificado
  const fechaFormateada = fechaNueva.toLocaleDateString(locale, opciones);

  return fechaFormateada;
};
