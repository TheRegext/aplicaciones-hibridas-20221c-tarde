/*
  CommonJS
  ES6
*/

const http = require('http')

http.createServer(function(request, response){
    // console.log("Hola")
    console.log("Llamado desde: ", request.url)

    if(request.url === '/hola.html'){
        for(let i=5; i<10; i++)
            response.write('<h1>Hola hola!</h1>')    
    }
    else if(request.url === '/hola2.html'){
        for(let i=5; i<20; i++)
            response.write('<h1>Hola hola!</h1>')    
    }
    else{
        response.write('<h1>Quien te conoce...</h1>')
    }

    
    response.end()

}).listen(6787)

