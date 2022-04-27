import * as AlumnosModel from '../services/alumnos.service.js'

function viewAll (req, res) {
  AlumnosModel.find()
    .then(function (alumnos) {
      res.status(200).json(alumnos) // renderiza en formato json
    })
}

export function viewOne (req, res) {
// query --> ?
// body --> contentido
// params --> /:nombre

  const id = parseInt(req.params.idAlumno)
  AlumnosModel.findOne(id)
    .then(function (alumno) {
      if (alumno) {
        res.status(200).json(alumno)
      } else {
        res.status(404).json({ message: `El alumno #${id} no se encuentra en el sistema.` }) // ok
      }
    })
}

export {
  viewAll
}
