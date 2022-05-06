function h () {
  return 5
}

function j () {
  return h() + 2
}

console.log(j())

async function b () {
  console.log('Soy B')
  return 5
}

// b() --> 5
// b() --> Promesa
async function a () {
  return b()
    .then(function (data) {
      return data + 10
    }) // estaria bien usar un await
}

// then -- se ejecuta cuando la promesa termina correctamente
// el valor que devuelve la funcion, es el parametro de la function then
// catch --  se ejecuta cunado la promesa falla

a()
  .then(function (pepe) {
    console.log('DENTRO DE LA PROMESA', pepe)
    return pepe + 1
  })
  .then(function (data) {
    console.log('Segundo THEN: ', data)
    return data + 1
  })
  .catch(function () {
    return 30
  })
  .then(function (data) {
    console.log('Tercer THEN', data)
  })

console.log('A: ', valor)
