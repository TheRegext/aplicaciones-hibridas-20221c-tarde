import express from 'express'
import ProjectRoute from './routes/projects.route.js'
import UserRoute from './routes/auth.route.js'
import cors from 'cors'

const app = express() // crea el objeto de la aplicacion
app.use(cors()) // permite que se puedan hacer peticiones desde cualquier origen
app.use('/', express.static('public'))
app.use(express.urlencoded({ extended: false })) // ParseBody urlencoded
app.use(express.json())
app.use('/', ProjectRoute)
app.use('/', UserRoute)

// Escucha el puerto y si funcioa, ejecuta la funcion
app.listen(2022, function () {
  console.log('Me conecte al puerto! http://localhost:2022 ')
})
