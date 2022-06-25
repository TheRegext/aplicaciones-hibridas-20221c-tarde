import express from 'express' // imporando el objeto express por defecto
import * as ProjectController from '../controllers/projects.api.controller.js' // importando el controlador
import { autentication } from '../middleware/autentication.middleware.js'

function setUser (req, res, next) {
  req.user = {
    _id: '5c8f8f8f8f8f8f8f8f8f8f8f',
    name: 'Juan',
    email: 'brian.lara@outlook.com.ar',
    role: 'admin'
  }
  next()
}

const route = express.Router()
route.all('/api/projects', autentication)
route.all('/api/projects/*', autentication)

route.get('/api/projects', ProjectController.find)
route.post('/api/projects', ProjectController.create)
route.get('/api/projects/:idProject', [setUser], ProjectController.findOne)
route.patch('/api/projects/:idProject', ProjectController.update)

export default route
