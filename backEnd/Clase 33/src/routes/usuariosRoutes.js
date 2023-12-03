import { Router } from 'express'
const router = Router()
import datos from "../model/datos.js";

// Obtener todos los usuarios
router.get("/usuarios", (req, res) => {
    res.render("publicoUsuarios", {
        data: datos
    })
})

router.get("/usuarios/:id", (req, res) => {
    
    const usuario = datos.find(function(usuario) {
        return usuario.id === parseInt(req.params.id)
    })
    if (!usuario) {
        return res.status(404).send(`Usuario no encontrado con id ${req.params.id}`)
    }
    res.render("publicoUsuario", {
        data: usuario
    })

})

export default router