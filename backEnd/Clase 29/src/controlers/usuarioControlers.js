
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

//GET
function usuarioGET (req, res) {
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
            mensaje: `<h2 style="color:green"> ${usuario.nombre} ${usuario.apellido} </h2>`,
            //respuesta: usuario
        };
    }
    res.status(respuesta.codigo).send(respuesta.mensaje);
};

//POST
function usuarioPOST(req, res) {
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
                mensaje:  `<h2 style="color: orange">El usuario ya fue creado previamente</h2>`
            };
        } else {
            usuario = {
                nombre: req.body.nombre,
                apellido: req.body.apellido
            };
            respuesta = {
                error: false,
                codigo: 200,
                mensaje:  `
                    <h2 style="color: green">Usuario creado</h2>
                    <ul>
                        <li>Nombre: ${usuario.nombre}</li>
                        <li>Apellido: ${usuario.apellido}</li>
                    </ul>
                `,
                //respuesta: usuario
            };
        }
    }
    res.send(respuesta.mensaje);
};

//PUT
function usuarioPUT(req, res) {
    if(!req.body.nombre || !req.body.apellido) {
        respuesta = {
            error: true,
            codigo: 502,
            mensaje: `<h2 style="color: red"> El campo nombre y apellido son requeridos </h2>`
        };
    } else {
        if(usuario.nombre === '' || usuario.apellido === '') {
            respuesta = {
                error: true,
                codigo: 501,
                mensaje: `<h2 style="color: orange">El usuario no ha sido creado </h2>`
            };
        } else {
            usuario = {
                nombre: req.body.nombre,
                apellido: req.body.apellido
            };
            respuesta = {
                error: false,
                codigo: 200,
                mensaje: `<h2 style="color: green"> Usuario actualizado </h2>
                    <ul style="color: blue">
                        <li>Nombre: ${usuario.nombre}</li>
                        <li>Apellido: ${usuario.apellido}</li>
                    </ul>
                
                `,
                //respuesta: usuario
            };
        }
    }
    res.send(respuesta.mensaje).status(respuesta.codigo);
};

//DELETE
function usuarioDELETE(req, res) {
    if(usuario.nombre === '' || usuario.apellido === '') {
        respuesta = {
            error: true,
            codigo: 501,
            mensaje: `<h2 style="color: red">El usuario no ha sido creado </h2>`
        };
    } else {
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: `<h2 style="color: green"> Usuario Eliminado Exitosamente </h2>`
        };
        usuario = { 
            nombre: '', 
            apellido: '' 
        };
    }
    res.send(respuesta.mensaje).status(respuesta.codigo);
};

module.exports = {
    usuarioGET,
    usuarioPOST,
    usuarioPUT,
    usuarioDELETE
}