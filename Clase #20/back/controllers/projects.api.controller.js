import * as ProjectModel from '../services/projects.db.service.js'

function find (req, res) {
  ProjectModel.find()
    .then(function (projects) {
      res.status(200).json(projects)
    })
}

function findOne (req, res) {
  const id = req.params.idProject
  ProjectModel.findOne(id)
    .then(function (project) {
      if (project) {
        res.status(200).json(project)
      } else {
        res.status(404).json({ message: `El proyecto #${id} no se encuentra en el sistema.` }) // ok
      }
    })
}

function create (req, res) {
  const project = req.body
  console.log(req.body)
  ProjectModel.create(project)
    .then(function (project) {
      res.status(201).json(project)
    })
}

export {
  find,
  findOne,
  create
}
