import { Router } from 'express';
const router = Router();

//obtener todos los usuarios
router.get('/admin/usuarios', (req,res) => {
    res.send("mostrando todos los usuarios")
});

//motar usuarios para actualizar
router.get('/admin/usuarios/:id', (req, res) => {
    res.send(`mostrando Usuario id: ${req.params.id}`)
});

// deberia ser put, pero los form solo aceptan metodos post y get
router.put('/admin/usuarios/:id', (req, res) => {
    //res.send(`desde un from tomando la info y enviando a DB`)
    res.send(`actualizando usuario con id: ${req.params.id}`)
});

//crear usuario
router.post('/admin/usuarios', (req, res) => {
    res.send("tomando info de from para insertarlos en DB")
});


//borrar usuario
router.delete('/admin/usuarios/:id', (req, res) => {
    res.send(`Borrando usuario di: ${req.params.id}`)
});

export default router;