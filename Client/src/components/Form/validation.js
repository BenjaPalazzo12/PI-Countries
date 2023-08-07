export const validarNombre = (name) => {
  if (typeof name !== "undefined") {
    return name.trim().length > 25
      ? "El nombre no debe superar los 25 caracteres."
      : "";
  } else {
    return "El nombre es requerido";
  }
};

export const validarDuracion = (tiempo) => {
  if(typeof tiempo !== "undefined"){
    return tiempo.trim().length > 90 
    ? 'El tiempo no debe superar 1 hora y media'
    : ''
  } else {
    return 'El tiempo es requerido'
  }
}

export const validarDificultad = (dif) => {
  const numericDif = Number(dif);
  return isNaN(numericDif) || numericDif < 1 || numericDif > 5
    ? "La dificultad debe estar entre 1 y 5."
    : "";
} 

export const validarFormulario = (form) => {
  const errors = {};
  errors.nombre = validarNombre(form.name);

  errors.tiempo = validarDuracion(form.duration);

  errors.dif = validarDificultad(form.dificulty)

  return { ...errors};
};