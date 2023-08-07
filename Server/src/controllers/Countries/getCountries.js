const axios = require('axios')
const URL = 'http://localhost:5000/countries'
const { Country } = require('../../db')


const getPaises = async (req, res) => {
    try {
        const count = await Country.count()
        if(count === 0){
            const { data } = await axios(URL)
            let countries = await Promise.all(
                data.map(async (obj) =>{
                    const country = {
                        id: obj.cca3,
                        name: obj.name.common,
                        flags: obj.flags.png,
                        capital: obj.capital ? obj.capital[0]: 'No Data',
                        continents: obj.continents[0],
                        population: obj.population,
                        subregion: obj.subregion,
                        area: obj.area ? obj.area : 'No Data',
                    }
                    Country.findOrCreate({
                        where: {
                            id: obj.cca3
                        },
                        defaults: {
                            
                            name: obj.name.common,
                            flags: obj.flags.png,
                            capital: obj.capital ? obj.capital[0]: 'No Data',
                            continents: obj.continents[0],
                            population: obj.population,
                            subregion: obj.subregion? obj.subregion:'No Data',
                            area: obj.area ? obj.area : 'No Data',
                        }
                    })
                    return country
                })
            )
            return res.status(200).json(countries)
        } 
        const paises = await Country.findAll()
        return res.status(200).json(paises)
    } catch (error) {
        return res.status(404).send(error)
    }
}

module.exports = getPaises