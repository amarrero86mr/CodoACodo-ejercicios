// Async await
let nombresPaises = [];
let data = [];

async function fetchCountries() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
      data = await response.json();

        return data
    } catch (err) {
        console.log("Error al cargar los datos: ",err);
    }
}

fetchCountries()
    .then(data => {
        nombresPaises = data.map(country => country.name.common);
        console.log(nombresPaises);
        listaPaises(nombresPaises);
});

let seleccion = document.querySelector("#paisesAElegir");
    
function listaPaises(array) {
    let contenido = "";
    array.forEach(item => {
        console.log(item);
        contenido += `
        <option value="${item}">${item}</option>
        `;
    });
    seleccion.innerHTML = contenido;
};

// Obtén una referencia al botón y al elemento select
const botonSeleccionar = document.getElementById("seleccionarPais");
const paisElegido = document.querySelector('#paisSeleccionado');

// Agrega un manejador de eventos al botón
botonSeleccionar.addEventListener("click", function() {
  const valorSeleccionado = seleccion.value;
  console.log(seleccion.value);
  if (valorSeleccionado === "selecciona") {
    alert("Por favor, selecciona un país primero.");
  } else {
    alert("Has seleccionado el país: " + valorSeleccionado);
    mostrarDatosPais(valorSeleccionado)
  }
});

// tomando datos sel pais seleccionado #paisSeleccionado
function mostrarDatosPais(valor) {
  const paisSeleccionado = data.find(item => item.name.common == valor)
  const nombrePais = paisSeleccionado.name.common;

  let capitalPais = paisSeleccionado.capital[0];

  const ubicacionPais = paisSeleccionado.continents[0];
  const poblacionPais = paisSeleccionado.population;
  
  let idioma = [];
  idioma = Object.values(paisSeleccionado.languages);
  let idiomaPais = idioma.join(', ');
  
  let moneda = Object.values(paisSeleccionado.currencies);
  let monedaDOS = Object.values(moneda[0]);
  monedaDOS = monedaDOS.reverse();
  let monedaPais = monedaDOS.join(', ');
    
  let areaPais = paisSeleccionado.area;
  let urlMapa = paisSeleccionado.maps.googleMaps;
  let urlbandera = paisSeleccionado.flags.png;

  // renderizando datos
  const mostrando = document.querySelector('#paisSeleccionado');
  mostrando.innerHTML = `
  <div>
      <h2>${nombrePais}</h2>
      <p>su capital es: ${capitalPais}.</p>
      <p>este pais se encuentra en la region de ${ubicacionPais}, abarcando un area de ${areaPais} m², con una poblacion de ${poblacionPais} habitantes</p>
  </div>
  <div>
      <p>otros datos importantes:</p>
      <ul>
          <li>Idiomas oficiales: ${idiomaPais}</li>
          <li>Moneda en cusrso legal: ${monedaPais}</li>
          <li>Bandera: <img width="60px" height="40px" src="${urlbandera}" alt="bandera del pais ${nombrePais}"></li>
      </ul>
  </div>
  <div>
      <iframe src="${urlMapa}" frameborder="1" width="300px" height="200px"></iframe>
  </div>
  `
}