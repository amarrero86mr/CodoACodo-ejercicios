const http = require("node:http");

const servidor = http.createServer ( function(solicitud, respuesta){

    if (solicitud.url === '/') {
        respuesta.writeHead(200,{
            'Content-Type': "text/html"
        });
        return respuesta.end("<h1> Hola Mundo </h1>")
    }else{
        respuesta.writeHead(404,{
            'Content-Type': "text/html"
        });
        return respuesta.end("<h1> No Encontrado </h1>")
    }
})

servidor.listen (4000, function(err) {
    if (err) {
        throw err
    }else{    
        console.log("SERVIDOR ONLINE")
    }
})