const { Router } = require("express");
const getPaises = require("../controllers/Countries/getCountries");
const getPaisById = require("../controllers/Countries/getCountriesById");
const getPaisByName = require("../controllers/Countries/getCountriesName");
const postActividad = require("../controllers/Activities/postActivities");
const getActividad = require("../controllers/Activities/getActivities");
const deleteActividad = require("../controllers/Activities/deleteActivities");

const router = Router();

// configuramos los middlewares

router.get("/countries", getPaises);
router.get("/countries/name", getPaisByName);
router.get("/countries/:id", getPaisById);

router.get("/activities", getActividad);
router.post("/activities", postActividad);
router.delete("/activities/:nameActivity", deleteActividad);

module.exports = router;
