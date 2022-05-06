import * as AlumnosModel from '../services/alumnos.service.js'
import * as AlumnosModelDB from '../services/alumnos.db.service.js'

function viewAll (req, res) {
  AlumnosModelDB.find()
    .then(function (alumnos) {
      res.status(200).json(alumnos) // renderiza en formato json
    })
}

function viewOne (req, res) {
  const id = req.params.idAlumno
  AlumnosModelDB.findOne(id)
    .then(function (alumno) {
      if (alumno) {
        res.status(200).json(alumno)
      } else {
        res.status(404).json({ message: `El alumno #${id} no se encuentra en el sistema.` }) // ok
      }
    })
}

function addOne (req, res) {
  // Obtengo los datos del alumno
  const alumnoData = req.body
  console.log('Alumno Data', alumnoData)

  // Guardo los datos del alumno
  AlumnosModel.create(alumnoData)
    .then(function (alumno) {
      res.status(201).json(alumno)
    })
}

function remove (req, res) {
  const id = parseInt(req.params.idAlumno)

  AlumnosModel.remove(id)
    .then(function (alumno) {
      if (alumno) {
        res.status(200).json(alumno)
      } else {
        res.status(404).json({ message: `El alumno #${id} no se encuentra en el sistema.` }) // ok
      }
    })
}

function reemplazar (req, res) {
  const id = parseInt(req.params.idAlumno)
  const alumnsoData = req.body

  AlumnosModel.reemplazar(id, alumnsoData)
    .then(function (alumno) {
      if (alumno) {
        res.status(200).json(alumno)
      } else {
        res.status(404).json({ message: `El alumno #${id} no se encuentra en el sistema.` }) // ok
      }
    })
}

export {
  viewAll,
  viewOne,
  addOne,
  remove,
  reemplazar
}
