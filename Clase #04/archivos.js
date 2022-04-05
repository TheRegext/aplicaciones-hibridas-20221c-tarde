const fs = require('fs')


function leerArchivo(path, response){
    fs.readFile(path, function(err, data){
        response.write(data)
        response.end()
    })
}

module.exports ={
    leerArchivo
}