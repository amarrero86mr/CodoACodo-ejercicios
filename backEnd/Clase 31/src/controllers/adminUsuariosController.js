import { getAllUsuariosFromDB } from "../model/model.js";

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
}