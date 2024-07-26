import { modelo2} from "../modelos/user.modelo.remedial.js"

export const test2 = (() =>{
    console.log("Llamando desde acá")
    })


modelo2.create({
    Alumno:"Angela",
    Status:"Pagado"
})