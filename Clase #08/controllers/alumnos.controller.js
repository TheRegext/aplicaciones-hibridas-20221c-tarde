import fs from 'fs'

export function getAll(req, res) {
    fs.readFile('./data/alumnos.json', function (err, data) {
        // MODELO
        const alumnos = err || data.toString().trim() == "" ? [] : JSON.parse(data.toString())

        // VISTA
        res.render('alumnos', { alumnos })

    })
}

export function getOne(req, res) {
    const id = parseInt(req.query.id)

    // Leer el archivo
    fs.readFile('./data/alumnos.json', function (err, data) {
        // hacer el parse de JSON
        const alumnos = err || data.toString().trim() == "" ? [] : JSON.parse(data.toString())        // Recorrer el array buscando el ID
        let alumno = null
        for (let i = 0; i < alumnos.length; i++) {
            if (id === alumnos[i].id) {
                alumno = alumnos[i]
            }
        }
        // Preguntar si exite ese ID
        if (alumno) {
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
        else {
            // Mostrar 404
            res.status(404).send(`No se encuentra el ID #${id}`)
        }
    })
}

export function create(req, res) {

    console.log("Query: ", req.query)
    console.log("Body: ", req.body)

    fs.readFile("./data/alumnos.json", function (err, data) {
        // Ternario programacion funcional
        const alumnos = err || data.toString().trim() == "" ? [] : JSON.parse(data.toString())
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
}
