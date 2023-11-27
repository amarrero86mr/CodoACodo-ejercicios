import { Router } from 'express';
const router = Router();
import datos from '../model/datos.js';


//obtener todos los usuarios
router.get('/admin/usuarios', (req,res) => {
    //res.send("mostrando todos los usuarios")
    res.render('adminUsuarios.ejs', {
        data: datos
    });
});

//crear usuario
router.get('/admin/usuario/crear', (req,res) => {
    //res.send("mostrando todos los usuarios")
    res.render('adminCrear.ejs', {});
});

//manejo de datos del formulario crear
router.post('/admin/usuarios', (req, res) => {
    const nuevoUsuario = req.body;
    const ultimoObjeto = datos[datos.length - 1];
    const nuevoId = ultimoObjeto ? ultimoObjeto.id + 1 : 1;
    nuevoUsuario.id = nuevoId;
    datos.push(nuevoUsuario);
    res.status(201).send(nuevoUsuario);
});

//tomar usuarios para actualizar
router.get('/admin/usuarios/:id', (req, res) => {
    const usuario = datos.find( datos => datos.id === parseInt(req.params.id));
    if (usuario) {
    res.render('adminActualizar.ejs', { data: usuario }); 
    } else{
        res.send(`Usuario con id: ${req.params.id}, No Encontrado`).status(404)
    };
});

// deberia ser put, pero los form solo aceptan metodos post y get
router.post('/admin/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const usuarioIndex = datos.findIndex(u => u.id == id);

    if (usuarioIndex === -1 ) {
        return res.status(404).json({mensaje:'usuario no encontrado'});
    }

    datos[usuarioIndex] = {...datos[usuarioIndex], ...req.body };
    res.json(datos[usuarioIndex]);
});

//borrar usuario
router.get('/admin/usuarios/borrar/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const usuarioIndex = datos.findIndex(u => u.id === id);

    if (usuarioIndex === -1){
        return res.status(404).json({mensaje:'usuario no encontrado'});
    }

    const usuarioEliminado = datos.splice(usuarioIndex, 1);

    res.json(usuarioEliminado[0]);
});

export default router;