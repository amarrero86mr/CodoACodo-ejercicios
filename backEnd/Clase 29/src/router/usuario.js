const express = require('express');
const router = express.Router();
//const usuarioControler = require ('../../controlers/usuarioControlers.js');
const {
    usuarioGET, 
    usuarioPOST, 
    usuarioPUT, 
    usuarioDELETE 
} = require ('../controlers/usuarioControlers.js');

//GET
router.get('/usuario', usuarioGET);

//POST
router.post('/usuario', usuarioPOST);

//PUT
router.put('/usuario', usuarioPUT);

//DELETE
router.delete('/usuario', usuarioDELETE);

module.exports = router;