import fs from 'fs'

async function find (includeDeleted = false) {
  return fs.promises.readFile('./data/alumnos.json')
    .then(function (bytes) {
      return JSON.parse(bytes.toString())
    })
    .then(function (alumnos) {
      if (includeDeleted) {
        return alumnos
      }
      const alumnosSinElminados = []
      for (let i = 0; i < alumnos.length; i++) {
        if (!alumnos[i].deleted) {
          alumnosSinElminados.push(alumnos[i])
        }
      }

      return alumnosSinElminados
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

async function create (alumnoData) {
  let alumno = null
  return find(true)
    .then(function (alumnos) {
      alumno = {
        ...alumnoData,
        id: alumnos.length + 1
      }

      alumnos.push(alumno)

      return fs.promises.writeFile('./data/alumnos.json', JSON.stringify(alumnos))
    })
    .then(function () {
      return alumno
    })
}

async function remove (id) {
  let alumno = null

  return find(true)
    .then(function (alumnos) {
      for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].id === id) {
          alumno = alumnos[i]
        }
      }

      if (alumno) {
        alumno.deleted = true

        return fs.promises.writeFile('./data/alumnos.json', JSON.stringify(alumnos))
      }
    })
    .then(function () {
      return alumno
    })
}

export {
  findOne,
  find,
  create,
  remove
}
