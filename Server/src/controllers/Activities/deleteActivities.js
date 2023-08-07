const { Activity } = require('../../db');

const deleteActividad = async (req, res) => {
  try {
    const { nameActivity } = req.params;

    const deletedRows = await Activity.destroy({ where: { name: nameActivity } });

    if (deletedRows === 0) {
      throw new Error("Activity not found");
    }

    res.status(200).json({ message: "Activity deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting activity", error: error.message });
  }
};

module.exports = deleteActividad;