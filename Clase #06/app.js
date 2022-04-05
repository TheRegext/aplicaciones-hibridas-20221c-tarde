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

        res.send("Guardando informacion magica...")

    })

})

app.get('/alumnos', function (req, res) {
    fs.readFile('./data/alumnos.json', function (err, data) {
        const digimons = JSON.parse(data.toString())

        res.write('<html><body><ul>')

        for (let i = 0; i < digimons.length; i++) {
            res.write(`
                <li>
                Nombre: ${digimons[i].name}
                </li>
            `)
        }

        res.write('</ul></body></html>')
        res.end()

    })
})


app.get('/digimon', function (req, res) {
    fs.readFile('./data/digimon.json', function (err, data) {
        const digimons = JSON.parse(data.toString())

        res.write('<html><body><ul>')

        for (let i = 0; i < digimons.length; i++) {
            res.write(`
                <li>
                <img src="${digimons[i].img}" alt="${digimons[i].name}" />
                Nombre: ${digimons[i].name}
                </li>
            `)
        }

        res.write('</ul></body></html>')
        res.end()

    })
})

app.listen(2022, function () {
    console.log("Me pude conectar a http://localhost:2022")
})


