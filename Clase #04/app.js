// Importamos el modulo calculadora.js con CommonJS
// const calc = require('./calculadora.js')
// Importamos el modulos calculadora.js con ES
import {suma, resta, PI} from './calculadora.js'
/*
function suma(m1, m2){
    console.log(m1+m2)
}*/

//console.log(calc)


console.log("2 + 5 = ", suma(2, 5), PI)
console.log("2 - 5 = ", resta(2, 5))