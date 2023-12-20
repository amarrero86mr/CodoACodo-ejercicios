import {
    getAllUsuariosFromDB,
    addUsuarioFromDB,
    getUsuarioPorIDFromDB,
    editUsuarioFromDB,
    deleteUsuarioFromDB
} from "../model/model.js";

// Usuarios VISTA (Read)
export const getAllUsuarios = async (req, res) => {
    try {
        const datos = await getAllUsuariosFromDB()
        res.render("adminUsuarios.ejs", {
            data: datos
        })
        
    } catch (error) {
        console.error('Error getting usuarios: ', error);
        res.status(500).send('Internal Server Error');
    }
};

// Agregar usuario VISTA 
export const addUsuario = async (req, res) => {
    try {
        res.render("adminCrear", {
            titulo: 'Crear Usuario'
        })
    } catch (error) {
        console.error('Error adding usuarios: ', error);
        res.status(500).send('Internal Server Error');
    }
};

// Agregar usuario POST (Create)
export const addUsuarioPOST = async (req, res) => {
    const newUsuarioData = req.body;
    
    try {
        await addUsuarioFromDB(newUsuarioData);
        res.redirect('/admin' + '?mensaje=Usuario Agregado');
    } catch (error) {
        console.error('Error adding usuarios: ', error);
        res.status(500).send('Internal Server Error');
    }
};

// Editar Usuarios Vista
export const editUsuario = async (req, res) => {
    const usuarioID = parseInt(req.params.id);
    try {
        const usuario = await getUsuarioPorIDFromDB(usuarioID);
        if (usuario) {
            res.render('adminActualizar', {
                data: usuario
            });
        } else {
            res.stratus(404).send('User not found');
        }
        
    } catch (error) {
        console.error('Error getting usuario by ID: ', error);
        res.status(500).send('Internal Server Error');
    }
};

// Editas usuario POST (Update)
export const editUsuarioPOST = async (req, res) => {
    const usuarioID = parseInt(req.params.id);
    const updatedUsuatioData = req.body;
    try {
        const updatedUsuario = await editUsuarioFromDB(usuarioID, updatedUsuatioData);
        if (updatedUsuario) {
            res.redirect('/admin' + '?mensaje=Usuario Actualizado');
        } else {
            res.status(500).send('Usuario not fund');
        }
        
    } catch (error) {
        console.error('Error getting usuario by ID: ', error);
        res.status(500).send('Internal Server Error');
    }
};

// borrar usuario (Deleted)
export const deleteUsuario = async (req, res) => {
    const usuarioID = parseInt(req.params.id);
    try {
        const deleteUsuario = await deleteUsuarioFromDB(usuarioID);
        if (deleteUsuario) {
            res.redirect('/admin' + '?mensaje=Usuario Borrado');
        } else {
            res.status(404).send('Usuario not fund');
        }
    } catch (error) {
        console.error('Error getting usuario by ID: ', error);
        res.status(500).send('Internal Server Error');
    }
};
/* estructura base de controles
export const ... = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
};
*/