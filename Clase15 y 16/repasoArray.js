/* Repaso de contenido de la clase 16 ARRAYs */

let nombres = ["fernando", "josé", "carla", "estaban", "vanina", "andréa", "dénis"];
/* length - chequear la longitud de valores de un array */
console.log(nombres.length); // debuelve: 7
console.log(nombres[nombres.length -1]); //devuelve: dénis

/* push - agregar un valor al último lugar */
nombres.push("jeremías");
console.log(nombres); // devuelve: (8) ['fernando', 'josé', 'carla', 'estaban', 'vanina', 'andréa', 'dénis', 'jeremías']

/* find - permite buscar un valor específico */
let caracterMayor = nombres.find((element) => element.length >= 8 );
console.log(caracterMayor); //fernando

/* pop - quitar el último valor */
let ultimoNombre = nombres.pop();
console.log(nombres); // (8) ['fernando', 'josé', 'carla', 'estaban', 'vanina', 'andréa', 'dénis']
console.log(ultimoNombre);// jeremías

/*unshift - agregar un valor al primer lugar */
nombres.unshift("jeremías");
console.log(nombres); //(8) ['jeremías', 'fernando', 'josé', 'carla', 'estaban', 'vanina', 'andréa', 'dénis']

/* join - formar strings con separadores */
let uniendo = nombres.join(" :) " );
console.log(uniendo); // devuelve: jeremías :) fernando :) josé :) carla :) estaban :) vanina :) andréa :) dénis

/* shift - quitar el primer valor */
let primerNombreFuera = nombres.shift();
console.log(primerNombreFuera); // jeremías
console.log(nombres); // (7) ['fernando', 'josé', 'carla', 'estaban', 'vanina', 'andréa', 'dénis']

/* concat  - unir arrays */
let primos = [ 1, 2, 3, 5, 7, 11, 13];
let noPrimos = [4, 6, 8, 9, 10, 12, 14]
let PrimosYnoPrimos = primos.concat(noPrimos);
 console.log(PrimosYnoPrimos);

