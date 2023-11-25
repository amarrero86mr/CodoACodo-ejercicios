const express = require('express');
const app = express();
const port = 3000;
const usuarioRoutes = require("./src/router/usuario");

//middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
var methodOverride = require('method-override');

//helpers (funciones para exportar al view)
app.locals.saludar = function (nombre) {
    return `hola ${nombre}`
};

// Template Engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

//rutas de router
app.use("/", usuarioRoutes);

//rutas de app
app.get('/', function(req, res) {
    res.render('inicio.ejs', {
        titulo: "Mi Pagina Web",
        test: app.locals.saludar,
        promocion: true,
        parrafo: "Aprovecha el CiverMonday de 50% descuentazo!!"
    })
});

app.get('/productos', function(req,res) {
    const dollar = 980;
    const data = [
        {
            producto:"DELL XPS 13",
            detalle: "proces i4 7823U, 4Gb RAM, 128Gb Memory, TouchScreen, 360º",
            precio: 499
        },
        {
            producto:"HP Spectre x360 13",
            detalle: "proces i4 7823U, 4Gb RAM, 128Gb Memory, TouchScreen, 360º",
            precio: 679
        },
        {
            producto:"LENOVO Yoga C940",
            detalle: "proces i4 7823U, 4Gb RAM, 128Gb Memory, TouchScreen, 360º",
            precio: 549
        },
    ];

    res.render("productos.ejs", {
        titulo: "Productos",
        productos: data,
        dollar
    });
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