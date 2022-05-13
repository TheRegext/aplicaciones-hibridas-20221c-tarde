function sumar(lista){
    let resultado = 0    
    for(let i=0; i<lista.length; i++){
        resultado += lista[i]
    }
    return resultado
}

function sumar_pares(lista){
    let resultado = 0    
    for(let i=0; i<lista.length; i++){
        resultado += (lista[i]%2 == 0) ? lista[i] : 0
    }
    return resultado
}

function sumar_impares(lista){
    let resultado = 0    
    for(let i=0; i<lista.length; i++){
        resultado += (lista[i]%2 !== 0) ? lista[i] : 0
    }
    return resultado
}

const numeros  = [4,1,3,2] // 7
console.log(sumar(numeros))
console.log(sumar_pares(numeros))
console.log(sumar_impares(numeros))




