const { Country } = require('../../db');

const getPaisById = async (req, res) => {
    try {
        const { id } = req.params;
        const CountryFound = await Country.findOne({where : {
            id: id}})
        
        if(!CountryFound){
            return res.status(400).json({error: 'Country not found'})
        }
        return res.status(200).json(CountryFound)
    } catch (error) {
        return res.status(500).json({message: 'Error al buscar el país', error: error.message})
    }
}
// 
// 
// 
//     res.status(404).send('Country not found'))
// }


module.exports = getPaisById 

//router.get('/:id', async(req, res) => {
//     const id = req.params.id;
//     let todosLosPaises = await information();
//     console.log(id);
//     if(id) {
//         let idPaises = await todosLosPaises.filter(pais => pais.id.toLowerCase() === id.toLowerCase())
//         idPaises.length?
//         res.status(200).json(idPaises):
//         res.status(404).send('Country not found')
//     }
// })/