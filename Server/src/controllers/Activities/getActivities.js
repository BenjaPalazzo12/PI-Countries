const { Activity, Country } = require("../../db");

const getActividad = async (req, res) => {
  try {
    const { name } = req.query;
    let db = await Country.findAll({
      include: {
        model: Country,
        attributes: ["name"],
        through : {
          name: "",
        }
      },
    });
    if(db)
    if (name) {
      const ActivityName = await Activity.findOne({
        where: {
          name: name,
        },
      });

      res.status(200).json(ActivityName);
    } else {
      const allActivities = await Activity.findAll();
      if (allActivities.length > 0) return res.status(200).json(allActivities);
      else throw Error;
    }
  } catch (error) {
    res.status(500).json({ error: "No activities in DB" });
  }
};

module.exports = getActividad;
