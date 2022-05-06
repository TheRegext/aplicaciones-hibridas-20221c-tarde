import express from 'express' // imporando el objeto express por defecto
import alumnosController from '../controllers/alumnos.controller.js'
import * as alumnosAPI from '../controllers/alumnos.api.controller.js'

const route = express.Router()

route.get('/alumnos', alumnosController.viewAll)
route.get('/alumnos/ver', alumnosController.viewOne)

route.get('/alumnos/editar', alumnosController.formEdit)
route.post('/alumnos/editar', alumnosController.edit)

route.get('/alumnos/nuevo', alumnosController.formCreate)
route.post('/alumnos/nuevo', alumnosController.create)

route.get('/api/alumnos', alumnosAPI.viewAll)
route.get('/api/alumnos/:idAlumno', alumnosAPI.viewOne)

// route.get('/api/alumnos/:idAlumno/matarias/:idMateria', alumnosAPI.viewOne)

route.post('/api/alumnos', alumnosAPI.addOne)

route.delete('/api/alumnos/:idAlumno', alumnosAPI.remove)

route.put('/api/alumnos/:idAlumno', alumnosAPI.reemplazar)

export default route
