import express from 'express'
import * as AlumnosController from '../controllers/alumnos.controller.js'

const route = express.Router() // crear el objeto de ruta

route.post('/save', AlumnosController.create)

route.get('/alumnos', AlumnosController.getAll)

route.get('/alumnos/ver', AlumnosController.getOne)

export default route