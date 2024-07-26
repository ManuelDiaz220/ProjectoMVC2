import {Schema, model} from "mongoose"

const esquema2 = new Schema ({
    Alumno:{
        type:String
    },
    Status:{
        type:String
    },

})

export const modelo2 = new model ('Remediales Pagados', esquema2)
