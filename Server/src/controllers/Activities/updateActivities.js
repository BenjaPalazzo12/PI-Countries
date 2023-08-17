const { Activity } = require("../../db");

const updateActivities = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("este es el id",id);
    const { name, duration, dificulty } = req.body;
    const updateActivities = await Activity.findByPk(id);

    if (name !== undefined && name !== "") {
      updateActivities.name = name;
    }
    if (duration !== undefined && duration !== "") {
      updateActivities.duration = duration;
    }
    if (dificulty !== undefined && dificulty !== "") {
      updateActivities.dificulty = dificulty;
    }

    if (updateActivities.changed()) {
      await updateActivities.save();
      return res.status(200).json({ message: "Actividad Actualizada" });
    } else {
      return res
        .status(200)
        .json({ message: "No hubo cambios para actualizar" });
    }
  } catch (error) {
    return res.status(500).json({message: "Error interno del servidor"});
  }
};

module.exports = updateActivities;
