const express = require('express')
const app = express()
const port = 3000

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//datos
let usuario = {
    nombre:'',
    apellido: ''
   };
let respuesta = {
    error: false,
    codigo: 200,
    mensaje: ''
};

//rutas
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

app.get('/usuario', function (req, res) {
    respuesta = {
        error: false,
        codigo: 200,
        mensaje: ''
    };
    if(usuario.nombre === '' || usuario.apellido === '') {
        respuesta = {
            error: true,
            codigo: 501,
            mensaje: `<h2 style="color: red">El usuario no ha sido creado</h2>`
        };
    } else {
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: `<h2 style="color:green">${usuario.nombre} ${usuario.apellido}</h2>`,
            //respuesta: usuario
        };
    }
    res.status(respuesta.codigo).send(respuesta.mensaje);
});

//POST
app.post('/usuario', function (req, res) {
    if(!req.body.nombre || !req.body.apellido) {
        respuesta = {
            error: true,
            codigo: 502,
            mensaje:  `<h2 style="color: red"> El campo nombre y apellido son requeridos </h2>`
        };
    } else {
        if(usuario.nombre !== '' || usuario.apellido !== '') {
            respuesta = {
                error: true,
                codigo: 503,
                mensaje:  `<h2 style="color: red">El usuario ya fue creado previamente</h2>`
            };
        } else {
            usuario = {
                nombre: req.body.nombre,
                apellido: req.body.apellido
            };
            respuesta = {
                error: false,
                codigo: 200,
                mensaje:  `<h2 style="color: green">Usuario creado</h2>`,
                respuesta: usuario
            };
        }
    }
    
    res.send(respuesta.mensaje);
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })