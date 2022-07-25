import * as ProjectModel from '../services/projects.db.service.js'

function find (req, res) {
  ProjectModel.find()
    .then(function (projects) {
      res.status(200).json(projects)
    })
}

function findOne (req, res) {
  const id = req.params.idProject
  console.log(req.user)
  ProjectModel.findOne(id)
    .then(function (project) {
      if (project) {
        res.status(200).json(project)
        req.socketClient.emit('project', JSON.stringify(project))
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
      req.socketClient.emit('new-project', project)
      res.status(201).json(project)
    })
}

function update (req, res) {
  const id = req.params.idProject
  const project = req.body

  ProjectModel.update(id, project)
    .then(function (project) {
      res.status(200).json(project)
    })
}

export {
  find,
  findOne,
  create,
  update
}
