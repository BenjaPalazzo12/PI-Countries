const { Country } = require('../../db')
const { Op } = require('sequelize')

const getPaisByName = async (req, res) => {
    const { name } = req.query;

    try {
        const countryFound = await Country.findOne({
            where: {
                name: { [Op.iLike]: `%${name}%` }
            }
        });

        if (countryFound) {
            console.log(countryFound);
            return res.status(200).json(countryFound);
        } else {
            throw new Error('No se encontró el país');
        }
    } catch (error) {
        res.status(400).json({ error: `No countries with the name ${name}` });
    }
}

module.exports = getPaisByName

