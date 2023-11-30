import pool from '../config/database.js';

export const getAllUsuariosFromDB = async () => {
    try {
        const [datos] = await pool("SELECT * FROM usuariosworkshop")
        console.log(datos)
        return datos
    } catch (error) {
        console.error('Error querying MySQL', error)
        throw error
    }
};