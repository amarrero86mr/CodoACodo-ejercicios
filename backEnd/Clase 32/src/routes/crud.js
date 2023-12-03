const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
//la libreria para agregar imagenes al server
const multer = require('multer');

//config de multer para almacenar archivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
})

const upload = multer({ storage: storage });



// pagina inicio
router.get('/', (req,res) => {
    res.send("inicio")
});

// agregar imagen Vista
router.get('/agregar', (req,res) =>{
    res.render("agregar.ejs", {
        titulo: "Agregar imagen",
        gracias: false,
        huboErrores: false,
        errores: []
    })
});

//agregar imagen Logiaca
router.post('/agregar', upload.single('foto'), [
    body('descripcion').notEmpty().withMessage('indicar una descripcion')
], (req,res) =>{
    //console.log('req.file-->', req.file)
    //console.log('req.body-->', req.body)
    //validaciones
    const errores = validationResult(req)
    console.log('ERRORES --> ',errores)

    if (!errores.isEmpty()) {
        return res.render('agregar', {
            titulo: 'Agregar Imagen - Hubo Errores',
            gracias: false,
            huboErrores: true,
            errores: errores.errors //<-- mensaje de error
        })
    }

    let imagen ={
        id: imagenesSubidas.length + 1, 
        descripcion: req.body.descripcion,
        nombre: req.file.filename
    }

    imagenesSubidas.push(imagen);
    
    res.render("agregar", {
        titulo: "Imagen subida",
        gracias: true,
        huboErrores: false,
        errores: []
    })
});

//editar
router.get('/editar/:id', (req,res) =>{
    const id = parseInt(req.params.id);
    const imagen = imagenesSubidas.find(elemento => elemento.id === id)
    
    if (imagen) {
        res.render("editar.ejs", {
            imagen: imagen
        })
    } else {
        res.send('Imagen no encontrada')
    }
});

//Editar form post
router.post('/editar/:id', upload.single('foto'), (req, res) => {
    
    const id = parseInt(req.params.id);
    
    imagenesSubidas.find(img => {
        if (img.id == id) {
           img.nombre = req.file.filename
           img.descripcion = req.body.descripcion
        }
    })
    res.render('todas', {
        datos: imagenesSubidas
    })
})

// borrar
router.get('/borrar/:id', (req, res) =>{
    const id = parseInt(req.params.id);

    imagenesSubidas = imagenesSubidas.filter(img => img.id !== id)

    res.render('todas.ejs', {
        datos: imagenesSubidas
    })
})

//muestra la galeria
router.get('/todas', (req, res) => {
    res.render('todas.ejs', {
        datos: imagenesSubidas
    })
})

module.exports = router

// simulando base de datos 
let imagenesSubidas = [];