import express from 'express'
import AlumnosRoute from './routes/alumnos.route.js'
const app = express() // crea el objeto de la aplicacion

app.set('view engine', 'ejs')

app.use('/', express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use('/', AlumnosRoute)

app.get('/ejs', function (req, res) {
  res.render('hola', { titulo: '<strong>Hola</strong>', mostrar: true })
})

// Escucha el puerto y si funcioa, ejecuta la funcion
app.listen(2022, function () {
  console.log('Me conecte al puerto! http://localhost:2022 ')
})
