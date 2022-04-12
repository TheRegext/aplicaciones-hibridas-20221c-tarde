import express from 'express'
import AlumnosRoute from './routers/alumnos.route.js'
import path from 'path'

const app = express() // Crea la aplicacion que usara en el servidor

app.use(express.static('public'))
app.use(express.urlencoded({
    extended: false
}))

app.set('view engine', 'ejs');

app.use(AlumnosRoute)

app.get('/ayuda', function (req, res) {
    res.sendFile('views/ayuda.html', { root: path.resolve() })
})

app.listen(2022, function () {
    console.log("Me pude conectar a http://localhost:2022")
})


