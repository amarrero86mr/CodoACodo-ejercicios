const express = require('express');
const app = express();
const port = 3000;
const usuarioRoutes = require("./src/router/usuario");

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//rutas de router
app.use("/", usuarioRoutes);
//rutas de app
app.get('/', function(req, res) {
    respuesta = {
        error: false,
        codigo: 200,
        mensaje: 'Punto de Inicio'
    };
    res.send(`
    <h1 style="color: blue"> ${respuesta.mensaje}</h1>
    `);
});
//mostrando URL no encontrada
app.use(function (req, res, next){
    respuesta ={
        error: true,
        codigo: 404,
        mensaje:`
        <h2 style="color: red"> EROR: URL No Encontrada </h2>
        `,
    };
    res.status(respuesta.codigo).send(respuesta.mensaje)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});