export const FormatearFecha = (fecha) => {
  const fechaNueva = new Date(fecha);

  const opciones = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  // Formatear la fecha en el idioma especificado
  const fechaFormateada = fechaNueva.toLocaleDateString("es", opciones);

  return fechaFormateada;
};
