function sumar_pro(lista, criterio){
    let resultado = 0    
    for(let i=0; i<lista.length; i++){
        resultado += criterio(lista[i])
    }
    return resultado
}

const numeros  = [4,1,3,2] // 7
// funcion flecha
console.log(sumar_pro(numeros, n => n))
console.log(sumar_pro(numeros, n => n % 2 === 0 ? n : 0))
console.log(sumar_pro(numeros, n => n % 2 !== 0 ? n : 0))