import Joi from '@hapi/joi'

class ValidadorEvento {
    constructor() {

    }
    
    validar(evento){
        const eventoSchema = Joi.object({
            nombre: Joi.string().min(1).required(),
            direccion: Joi.string().min(1).required(),
            fecha: Joi.date().iso().required(),
            creador: Joi.string().min(1).required(),
            contacto: Joi.string().email().max(999).required()
        })
        const { error } = eventoSchema.validate(evento)
        if (error) {
            console.log("error valid")
            throw { message: error.message, status: 400 }
        }
    }
}

export {
    ValidadorEvento
}