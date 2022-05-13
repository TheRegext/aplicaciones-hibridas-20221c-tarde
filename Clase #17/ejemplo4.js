const numeros  = [4,1,3,2] // 7

// funcion flecha
console.log(numeros.reduce((va, n) => va + n, 0))
console.log(numeros.reduce((va, n) => va + ( n % 2 === 0 ? n : 0), 0))
console.log(numeros.reduce((va, n) => va + ( n % 2 !== 0 ? n : 0), 0))