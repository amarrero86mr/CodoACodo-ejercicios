const peliculas = [
    {
        id: 1,
        titulo: "Career Girls",
        director: "Mike Leigh",
        genero: "Drama",
        anio: 1997,
        duracionEnMinutos: 83,
        ganoOscar: false,
        calificacionIMDB: 7.1
    },
    {
        id: 2,
        titulo: "Our Idiot Brother",
        director: "Jesse Peretz",
        genero: "Comedia",
        anio: 2011,
        duracionEnMinutos: 90,
        ganoOscar: false,
        calificacionIMDB: 6.4
    },
    {
        id: 3,
        titulo: "Liebestraum",
        director: "Mike Figgis",
        genero: "Horror",
        anio: 1991,
        duracionEnMinutos: 112,
        ganoOscar: true,
        calificacionIMDB: 6
    },
    {
        id: 4,
        titulo: "Summer and Smoke",
        director: "Peter Glenville",
        genero: "Drama",
        anio: 1961,
        duracionEnMinutos: 118,
        ganoOscar: false,
        calificacionIMDB: 6.9
    },
    {
        id: 5,
        titulo: "Axed",
        director: "Ryan Lee Driscoll",
        genero: "Thriller",
        anio: 2012,
        duracionEnMinutos: 84,
        ganoOscar: false,
        calificacionIMDB: 3.7
    },
    {
        id: 6,
        titulo: "The Mist",
        director: "Frank Darabont",
        genero: "Sci-Fi",
        anio: 2007,
        duracionEnMinutos: 126,
        ganoOscar: true,
        calificacionIMDB: 7.1
    },
    {
        id: 7,
        titulo: "Tom and Huck",
        director: "Peter Hewitt",
        genero: "Aventura",
        anio: 1995,
        duracionEnMinutos: 97,
        ganoOscar: false,
        calificacionIMDB: 5.5
    },
    {
        id: 8,
        titulo: "The Lord of the Rings: The Return of the King",
        director: "Peter Jackson",
        genero: "Aventura",
        anio: 2003,
        duracionEnMinutos: 401,
        ganoOscar: true,
        calificacionIMDB: 8.9
    },
    {
        id: 9,
        titulo: "Doctor Strange",
        director: "Scott Derrickson",
        genero: "Accion",
        anio: 2016,
        duracionEnMinutos: 115,
        ganoOscar: true,
        calificacionIMDB: 7.5
    },
    {
        id: 10,
        titulo: "The Last Lovecraft: Relic of Cthulhu",
        director: "Henry Saine",
        genero: "Horror",
        anio: 2009,
        duracionEnMinutos: 78,
        ganoOscar: false,
        calificacionIMDB: 5.6
    }
]

//datos del html
const buscar = document.querySelector("#buscar");
// funcion de renderizado de peliculas
let render = document.getElementById('render');

function renderPeliculas(array) {
    let contenido = ""
    array.forEach(obj => {

        contenido += `
        <div class="peliRender">
            <h2>${obj.titulo}</h2>
            <ul>
                <li>Director: ${obj.director}</li>
                <li>Genero: ${obj.genero}</li>
                <li>Año: ${obj.anio}</li>
                <li>Clasificacion IMDB: ${obj.calificacionIMDB}</li>
            </ul>
        </div>
    `
        render.innerHTML = contenido;
    })
};

//tomando el valor a comparar
buscar.addEventListener('click', () => {
    const puntuacion = document.querySelector(".puntuacion").value;
    const valorComaprar = parseFloat(puntuacion);
    console.log(valorComaprar);

//filtrado de películas
function mostrarPelis(valor) {
    return new Promise(function (res, rej) {
        const peliculasValor = peliculas.filter(pelis => pelis.calificacionIMDB >= valor)
        if (peliculasValor.length > 0) {
            setTimeout(function() {
                res(peliculasValor) // pasa al THEN
            }, Math.random() * 5000) //parece divertido no saber cuando, jaja
        } else {
            setTimeout(function () {
                rej("No se ha encontrado peliculas con esa puntuación") // pasa al CATCH
            }, Math.random() * 4000)
        }
    })
}

// manejando las respuestas de las promesas
mostrarPelis(valorComaprar)
    .then(function (persona) {
        return persona
    })
    .then(function (persona) {
        renderPeliculas(persona)
        persona.forEach(element => {
            console.log(element.titulo)
        });
    })
    .catch(function (err) {
        console.log(err)
        render.innerHTML =`
        <div class="peliRender">
            <p>No se ha encontrado peliculas con esa puntuación</p>
        </div>
    `
    })
});