import {Schema, model} from "mongoose"

export const esquema = new Schema ({
    Alumno:{
        type:String
    },
    apepat:{
        type:String
    },
    apemat:{
        type:String
    },
    Promedio:{
        type:String
    }

})

export const modelo = new model ('aprobados', esquema)
