import { Router } from 'express'
const router = Router()
import datos from "../model/datos.js";

// Obtener todos los usuarios
router.get("/admin/usuarios", (req, res) => {
    res.render("adminUsuarios", {
        data: datos
    })
})

// Crear usuario VIEW
router.get("/admin/usuario/crear", (req, res) => {
    res.render("adminCrear", {
        titulo: "Crear usuario"
    })
})

// Manejo de datos del form
router.post("/admin/usuarios/crear", (req, res) => {
    // completar
})

// Tomar usuario para actualizar VIEW
router.get("/admin/usuarios/:id", (req, res) => {
    
   // completar

})

// Manejo de datos del form
router.post("/admin/usuarios/:id", (req, res) => {
   // completar
})

// Borrar usuario
router.get("/admin/usuarios/borrar/:id", (req, res) => {
   // completar
})


export default router
