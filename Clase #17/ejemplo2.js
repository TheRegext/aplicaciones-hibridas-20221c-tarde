function sumar_pro(lista, criterio){
    let resultado = 0    
    for(let i=0; i<lista.length; i++){
        resultado += criterio(lista[i])
    }
    return resultado
}

function todos(n){
    return n
}

function pares(n){
    return n % 2 === 0 ? n : 0
}

function impares(n){
    return n % 2 !== 0 ? n : 0
}

const numeros  = [4,1,3,2] // 7
console.log(sumar_pro(numeros, todos))
console.log(sumar_pro(numeros, pares))
console.log(sumar_pro(numeros, impares))