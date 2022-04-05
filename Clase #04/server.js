/// CommonJS
// const http = require('http')
// const fs = require('fs') // incluimos el moddulo de file system

// ECMAScript
import { createServer } from 'http'
import { readFile } from 'fs'

/**
 * req - Request: lo que me envia el cliente
 * res - Response: lo que le enviamos al cliente
 */
createServer(function (req, res) {
    // se ejecuta cuando se realiza una peticion (solicita un recurso)
    const recurso = req.url // tenemos el recurso que quiere el cliente
    // console.log("Entre a la peticion: ", recurso)

    if (recurso === '/pedro.html') {
        // data es el contenido del archivo
        readFile('./html/pedro.html', function (err, data) {
            if (!err) {
                res.write(data)
            }
            else {
                res.write("Algo salio mal...")
            }
            res.end()

            //console.log(data)
            //console.log(res)
        }) // leemos el archivo
    }
    else if (recurso === '/digimon.html') {
        readFile('./data/digimon.json', function (err, data) {
            // JSON.parse Interpreta el texto y lo transforma en objetos reales de JavaScript
            // JSON.stringify  Convierte un objeto a JSON
            let digimons = JSON.parse(data.toString())

            res.write('<html><body><ul>')
            for (let i = 0; i < digimons.length; i++) {
                // string template 
                res.write(`
                    <li>
                    <img src="${digimons[i].img}" alt="${digimons[i].name}"  />
                        Nombre: ${digimons[i].name}
                    </li>
                `)
            }
            res.write('</ul></body></html>')

            res.end();
            // console.log(digimons)

        })
    }
    else if(recurso === '/juan.html'){
        res.write('<h1>Hola Juan 17</h1>')
        res.end()
    }

    //    console.log("Finalice la peticion")
})
    // escuchar en un puerto
    .listen(1560)