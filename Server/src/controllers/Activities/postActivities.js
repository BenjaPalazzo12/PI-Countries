const { Activity} = require('../../db')

const postActividad = async (req, res) => {
    try {
        const {name, seasson, dificulty , duration} = req.body
        const newActivity = await Activity.create({name, seasson,dificulty, duration})
        if( !name || !seasson || !dificulty || !duration){
            return res.status(400).send('Faltan propiedades')
        }
        return res.status(200).json(newActivity)
    } catch (error) {
        res.status(400).send(error.message)
    }

}


module.exports =  postActividad 