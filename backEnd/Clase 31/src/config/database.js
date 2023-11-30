import { config } from 'dotenv';
config();

import {createPool} from 'mysql2/promise';
import { Connection } from 'mysql2/typings/mysql/lib/Connection';

const pool = createPool ({
    host: "localhost" || process.env.DB_HOST,
    user: "root" || process.env.DB_USER,
    password: "" || process.env.DB_PASSWORD,
    database: "workshop2023" || process.env.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0,
    port: 3306 || process.env.DB_PORT
});

// Prueba de Coneccion
pool.getConnection()
    .then(connection =>{
        console.log('Connected to MySQL Database');
        connection.release();
    })
    .catch(err =>{
        console.error('Error connecting to MySQL', err);
    });

    export default pool;