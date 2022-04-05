import express from 'express'
import fs from 'fs'

const app = express() // Crea la aplicacion que usara en el servidor

app.use(express.static('public'))
app.use(express.urlencoded({
    extended:false
}))

app.post('/save', function (req, res) {

    console.log("Query: ", req.query)
    console.log("Body: ", req.body)

    fs.readFile("./data/alumnos.json", function (err, data) {
        // Ternario programacion funcional
        const alumnos = err ? [] : JSON.parse(data.toString())

        let alumno = {
            id: alumnos.length + 1,
            name: req.body.name,
        }

        alumnos.push(alumno)

        fs.writeFile(
            './data/alumnos.json',
            JSON.stringify(alumnos),
            function (err) {
                console.log("Algo salio mal...")
            }
        )
        // Envia un codigo 300 para redireccionar a esa pagina
        res.redirect('/alumnos') 
        

    })

})

app.get('/alumnos', function (req, res) {
    fs.readFile('./data/alumnos.json', function (err, data) {
        const alumnos = JSON.parse(data.toString())

        res.write(`
        <html>
            <body>
            <a href="/nuevo.html">Agregar Alumno</a>
            <ul>`)

        for (let i = 0; i < alumnos.length; i++) {
            res.write(`
                <li>
                Nombre: #${alumnos[i].id} - ${alumnos[i].name}
                <a href="/alumno/ver?id=${alumnos[i].id}">Ver</a>
                </li>
            `)
        }

        res.write('</ul></body></html>')
        res.end()

    })
})

app.get('/alumno/ver', function(req, res){
    const id = parseInt(req.query.id)

    // Leer el archivo
    fs.readFile('./data/alumnos.json', function(err, data){
        // hacer el parse de JSON
        const alumnos = err ? [] : JSON.parse(data.toString())
        // Recorrer el array buscando el ID
        let alumno = null
        for(let i=0; i < alumnos.length; i++){
            if(id === alumnos[i].id){
                alumno = alumnos[i]
            }
        }
        // Preguntar si exite ese ID
        if(alumno){
            // Mostrar el contenido
            res.send(`
                <html>
                <body>
                    <h1>${alumno.name}</h1>
                    <p>Numero: ${alumno.id}</p>
                </body>
                </html>
            `)
        }
        else{
            // Mostrar 404
            res.status(404).send(`No se encuentra el ID #${id}`)
        }
    })
    


})
/*
let count = 0

app.get('/count', function(req, res){
    count++
    res.send(`<h1>${count}</h1>`)

})
*/

app.listen(2022, function () {
    console.log("Me pude conectar a http://localhost:2022")
})


