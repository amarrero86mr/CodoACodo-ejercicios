const texto = require ('./string');
const multiple = require ('./multiple');

console.log(texto.module);
console.log(multiple.module.saludar('luis'));
console.log('las materias son: ' +multiple.module.materias.join(', tambien: '));
