import { Router } from 'express';
const router = Router();

//obtener todos los usuarios
router.get('/usuarios', (req,res) => {
    res.send("mostrando todos los usuarios")
});

//obtenre un usuario
router.get('/usuarios/:id', (req, res) => {
    res.send(`mostrando Usuario id: ${req.params.id}`)
});

export default router;