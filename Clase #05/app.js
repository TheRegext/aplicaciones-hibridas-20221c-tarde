import express from 'express'
import { readFile } from 'fs'

const app = express() // Crea la aplicacion que usara en el servidor

app.get('/juan', function(req, res){
    res.send("Hola Juan")
})

app.get('/juli', function(req, res){
    res.sendFile('E:/Davinci/clase5/html/juli.html')
})

app.get('/digimon', function(req, res){
    readFile('./data/digimon.json', function(err, data){
        const digimons = JSON.parse(data.toString())
        
        res.write('<html><body><ul>')

        for(let i=0; i<digimons.length; i++){
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

app.listen(2022, function(){
    console.log("Me pude conectar a http://localhost:2022")
})


