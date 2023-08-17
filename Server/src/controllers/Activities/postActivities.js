const { Activity, Country } = require("../../db");

const postActividad = async (req, res) => {
  try {
    const { name, seasson, dificulty, duration } = req.body;
  
      
  ;
    // Verificar si los datos requeridos están presentes
    if (!name || !seasson || !dificulty || !duration) {
      return res.status(400).send("Faltan propiedades");
    }
    const newActivity = await Activity.create({
      name,
      seasson,
      dificulty,
      duration,
    });
    return res.status(201).json(newActivity);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = postActividad;
