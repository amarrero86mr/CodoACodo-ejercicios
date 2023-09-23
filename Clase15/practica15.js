function listaDeCompras() {
    let productos = [];
    let siguiente = "si";
    // bucle
    do{
    // preguntas
    let nombre = prompt('Nombre del producto?');
    let precio = parseFloat(prompt('Precio'));
    let stock = parseInt(prompt('stock'));
  
    const producto = {
      nombre: nombre,
      precio: precio,
      stock: stock,
    };

    productos.push(producto);
    
    
    siguiente = prompt('quieres seguir añadiendo mas productos? (si/no)');
        
    // preguntar si quiero seguir agregando productos
    }while( siguiente == "si");
    
    productos.forEach(element => {
        console.log(element);
    });
}

listaDeCompras();

 