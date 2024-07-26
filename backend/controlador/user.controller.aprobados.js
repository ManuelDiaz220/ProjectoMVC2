import { modelo } from "../modelos/user.modelo.aprobados.js"


export const test1 = (() =>{
console.log("Llamando desde el cielo")
})

modelo.create({
    Alumno:"Daniel",
    apepat: "Gallegos",
    apemat:"Luna",
    Promedio: "9.5"
})
