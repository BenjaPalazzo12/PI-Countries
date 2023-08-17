export const validarFormulario = (form) => {
  const errors = {};
  const formDuration = form.duration.split(" ");
  errors.nombre = validarNombre(form.name);
  errors.dif = validarDificultad(form.dificulty);
  // console.log(form.duration.split(" "));
  if (!formDuration) {
    errors.tiempo = "La duración es requerida";
  } else if (parseInt(formDuration[0]) <= 0) {
    errors.tiempo = "La duración debe ser mayor que cero";
  }

  formDuration.forEach((element) => {
    if (
      !element.includes("horas") &&
      !element.includes("hora") &&
      !element.includes("minuto") &&
      !element.includes("minutos") &&
      !element.includes("segundos") &&
      !element.includes("segundo")
    ) {
      errors.tiempo = "Agregar un formato de tiempo";
    } else {
      errors.tiempo = "";
    }
  });

  return { ...errors };
};

const validarNombre = (name) => {
  if (typeof name === "undefined" || name.trim() === "") {
    return "El nombre es requerido";
  } else if (name.trim().length > 15) {
    return "El nombre no debe superar los 15 caracteres.";
  } else {
    return "";
  }
};

const validarDificultad = (dif) => {
  const numericDif = Number(dif);
  return isNaN(numericDif) || numericDif < 1 || numericDif > 5
    ? "La dificultad debe estar entre 1 y 5."
    : "";
};
