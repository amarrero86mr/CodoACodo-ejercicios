import { Router } from 'express';
const router = Router();
import datos from '../model/datos.js';

//obtener todos los usuarios
router.get('/usuarios', (req,res) => {
    res.render('publicoUsuarios.ejs', {
        data: datos
    });
});

//obtenre un usuario
router.get('/usuarios/:id', (req, res) => {
    const usuario = datos.find( datos => datos.id === parseInt(req.params.id));
    if (usuario) {
    res.render('publicoUsuario.ejs', { data: usuario }); 
    } else{
        res.send(`Usuario con id: ${req.params.id}, No Encontrado`).status(404)
    };
});

export default router;