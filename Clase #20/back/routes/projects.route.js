import express from 'express' // imporando el objeto express por defecto
import * as ProjectController from '../controllers/projects.api.controller.js' // importando el controlador
const route = express.Router()

route.get('/api/projects', ProjectController.find)
route.post('/api/projects', ProjectController.create)
route.get('/api/projects/:idProject', ProjectController.findOne)

export default route
