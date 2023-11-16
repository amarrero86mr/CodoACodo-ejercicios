//let saludar = nombre => console.log(`hola ${nombre}`);

function saludar ( nombre ) {
    console.log( `hola ${nombre}`)
};

const profe = {
    nombre: 'Santi',
    materia: 'Progamación',
};

const materias = ['tencnologías de la información', 'taller de programación', 'educación tecnológica'];

const numero = 10;
const cursando = true;

exports.module = {
    cursando,
    numero,
    materias,
    profe,
    saludar
}
