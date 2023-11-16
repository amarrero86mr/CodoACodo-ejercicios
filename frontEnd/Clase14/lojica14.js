/** Chequear Edad mínima*/

function chequear (a) {
    if (a >= 18) {
        alert("Puedes cursar en Codo A Codo");
    }else{
        alert("lo sentimos, no cumples con la edad minima");
    }
}

let edad = prompt("dime tu edad");

chequear(edad);

/** Fn Saludar */

function saludar (name){
    alert("¡Hola " + name + " !  ¿Cómo estas?");
}

saludar ( prompt("¿cómo te llamas?") );

/** Fn calcular area de triangulo */
console.log("calculemos el area de un triangulo");

let base = parseFloat(prompt("escribe la base"));
let altura = parseFloat(prompt("escribe la altura"));

const areaTriangulo = (a, b) => {
    return (a * b) / 2;
}
let area = areaTriangulo(base, altura);

console.log(" el area del triangulo es: " + area );

/** FN Precio con descuento 15% a partir de $3500 */

let precio = parseFloat(prompt("introduce el precio, si es mayor de 3500 se le hara un descuento"))

function precioFinal (precio) {
    if (precio >= 3500){
        console.log("aplica el descuento del 15% ")
        console.log("el precio final es: $" + (precio * 0.85) );
        
    }else{
        console.log("no aplica el descuento")
        console.log("el precio final es: $" + precio );
    }
}

precioFinal(precio);

/** Fn Precio con descuento 15% a elegir */

let precio1 = parseFloat(prompt("introduce el precio"));
let descuento = prompt("dime si aplica el descuento del 15% (si/no)");

function precioFinalEleccion (precio1, descuento) {
    if ( descuento == "si" || descuento == "SI" || descuento == "Si"){
        console.log("descuento del 15% aplicado");
        console.log("el precio final es: $" + (precio1 * 0.85) );
    }else{
        console.log("el precio final es: $" + precio1 );
    }
}

precioFinalEleccion (precio1, descuento);