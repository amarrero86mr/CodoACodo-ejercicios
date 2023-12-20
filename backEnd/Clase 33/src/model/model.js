import { query } from 'express';
import pool from '../config/database.js';

export const getAllUsuariosFromDB = async () => {
    try {
        const [datos] = await pool('SELECT * FROM usuariosworkshop')
        console.log(datos)
        return datos
    } catch (error) {
        console.error('Error querying MySQL', error)
        throw error
    }
};

// agregar Usuario - POST 
export const addUsuarioFromDB = async (usuarioData) => {
    try {
        await pool.query('INSERT INTO usuariosworkshop SET ?', [usuarioData]);
    } catch (error) {
        console.error('Error insert into MySQL ', error)
        throw error
    }
}

// vista usuario pot ID - Get
export const getUsuarioPorIDFromDB = async (id) => {
    try {
        const [dato] = await pool('SELECT * FROM usuariosworkshop WHERE id = ?', [id]);
        return dato[0]; // retornamos dato como obj en vez de array
    } catch (error) {
        console.error('Error querying MySQL', error)
        throw error
    }
}

/*
export const ... = async () => {
    try {
        
    } catch (error) {
        
    }
}
*/