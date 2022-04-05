export function suma(n1, n2){
    return n1 + n2
}

export function resta(n1, n2){
    return n1 - n2
}

export const PI = 3.14

export default {
    suma,
    resta,
    PI
}

// Exportamos con CommonJS
/*
module.exports = {
    suma,
    resta,
    PI: 3.14
}
*/