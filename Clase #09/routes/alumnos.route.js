import express from 'express' // imporando el objeto express por defecto
import alumnosController from '../controllers/alumnos.controller.js'

const route = express.Router()

route.get('/alumnos', alumnosController.viewAll)
route.get('/alumnos/ver', alumnosController.viewOne)

route.get('/alumnos/editar', alumnosController.formEdit)
route.post('/alumnos/editar', alumnosController.edit)

route.get('/alumnos/nuevo', alumnosController.formCreate)
route.post('/alumnos/nuevo', alumnosController.create)

export default route
