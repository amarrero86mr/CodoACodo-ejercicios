import { Router } from 'express';
const router = Router();
import { getAllUsuarios } from '../controllers/adminUsuariosController.js';

//obtener todos los usuarios
router.get('/admin/usuarios', getAllUsuarios);

//crear usuario
router.get('/admin/usuario/crear', (req,res) => {
    
});

//manejo de datos del formulario crear
router.post('/admin/usuarios', (req, res) => {
    
});

//tomar usuarios para actualizar
router.get('/admin/usuarios/:id', (req, res) => {
    
});

// deberia ser put, pero los form solo aceptan metodos post y get
router.post('/admin/usuarios/:id', (req, res) => {
    
});

//borrar usuario
router.get('/admin/usuarios/borrar/:id', (req, res) => {
    
});

export default router;