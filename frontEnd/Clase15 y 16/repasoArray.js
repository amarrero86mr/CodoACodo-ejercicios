/* Repaso de contenido de la clase 16 ARRAYs */

let nombres = ["fernando", "josé", "carla", "estaban", "vanina", "andréa", "dénis"];
/*1 length - chequear la longitud de valores de un array */
console.log(nombres.length); // debuelve: 7
console.log(nombres[nombres.length -1]); //devuelve: dénis

/*2 push - agregar un valor al último lugar */
nombres.push("jeremías");
console.log(nombres); // devuelve: (8) ['fernando', 'josé', 'carla', 'estaban', 'vanina', 'andréa', 'dénis', 'jeremías']

/*3 find - permite buscar un valor específico */
let caracterMayor = nombres.find((element) => element.length >= 8 );
console.log(caracterMayor); //fernando

/*4 pop - quitar el último valor */
let ultimoNombre = nombres.pop();
console.log(nombres); // (8) ['fernando', 'josé', 'carla', 'estaban', 'vanina', 'andréa', 'dénis']
console.log(ultimoNombre);// jeremías

/*5 unshift - agregar un valor al primer lugar */
nombres.unshift("jeremías");
console.log(nombres); //(8) ['jeremías', 'fernando', 'josé', 'carla', 'estaban', 'vanina', 'andréa', 'dénis']

/*6 join - formar strings con separadores */
let uniendo = nombres.join(" :) " );
console.log(uniendo); // devuelve: jeremías :) fernando :) josé :) carla :) estaban :) vanina :) andréa :) dénis

/*7 shift - quitar el primer valor */
let primerNombreFuera = nombres.shift();
console.log(primerNombreFuera); // jeremías
console.log(nombres); // (7) ['fernando', 'josé', 'carla', 'estaban', 'vanina', 'andréa', 'dénis']

/*8 concat  - unir arrays */
let primos = [ 1, 2, 3, 5, 7, 11, 13];
let noPrimos = [4, 6, 8, 9, 10, 12, 14]
let PrimosYnoPrimos = primos.concat(noPrimos);
 console.log(PrimosYnoPrimos); //: (14) [1, 2, 3, 5, 7, 11, 13, 4, 6, 8, 9, 10, 12, 14]

 /*9 forEach - recorre un array */
nombres.forEach((element) => console.log("nombre: " + element));

/*10 split - separar un string en array */
let separando = uniendo.split(" :) ");
console.log(uniendo);
console.log(separando);

/*11 splice - recortar un array */
let recortando = nombres.splice(2,3);
console.log(recortando); //: (3) ['carla', 'estaban', 'vanina']

/*12 map - crea un array modificando cada valor */
let primosModificados = primos.map ((item) => item*2);
console.log(primosModificados); //: (7) [2, 4, 6, 10, 14, 22, 26]

let recortandoModif = recortando.map((item) => item = item + ' - ' + item.length);
console.log(recortandoModif); //: (3) ['carla - 5', 'estaban - 7', 'vanina - 6']

/*13 reduce - permite acumular todos los valores*/
let noPrimosReduce = noPrimos.reduce((acc, item) => acc + item, 0);
console.log(noPrimosReduce); //: 63

/*14 every - chequear que todos los valores sean true*/
let verdadero = recortando.every( (item) => item.length >= 6 );
console.log(verdadero); //: false

/*15 some - chequear que alguno de los valores sea true */
let alguno = recortando.some( (item) => item.length >= 6 );
console.log(alguno); //: true

/*16 sort - ordenar un array */
console.log(nombres); //: (4) ['fernando', 'josé', 'andréa', 'dénis']
let ordenados = nombres.sort();
console.log(ordenados); //: (4) ['andréa', 'dénis', 'fernando', 'josé']

let number =[54, 32, 34, 72, 77, 1, 49]
let numberOrder = number.sort((a, b) => a - b);
console.log(numberOrder); //: (7) [1, 32, 34, 49, 54, 72, 77]

let ordencaracter = nombres.sort((a, b) => a.length - b.length );
console.log(ordencaracter); //: (4) ['josé', 'dénis', 'andréa', 'fernando']

/*17 filter - permite filtrar por alguna condición */
let filtrados = nombres.filter((item) => item.length >= 6 );
console.log(filtrados)