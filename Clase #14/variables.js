const n1 = {
  numero: 7,
  id: 10,
  edad: 17
}

const { numero, id } = n1
// copiar un objeto
const n2 = {
  ...n1, // numero: n1.numero, id: n1, edad: n1.edad
  altura: 80,
  id: 22
} // X - VeryMal

n2.numero = 9

console.log(n2)
