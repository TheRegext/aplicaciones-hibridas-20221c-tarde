import fs from 'fs'

async function find () {
  return fs.promises.readFile('./data/alumnos.json')
    .then(function (bytes) {
      return JSON.parse(bytes.toString())
    })
    .catch(function () {
      return []
    })
}

async function findOne (id) {
  return find()
    .then(function (alumnos) {
      let alumno = null
      for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].id === id) {
          alumno = alumnos[i]
        }
      }
      return alumno
    })
}

export {
  findOne,
  find
}
