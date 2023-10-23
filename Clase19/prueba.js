// Async await

async function fetchCountries() {

    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();

        return data
    } catch (err) {
        console.log("Error al cargar los datos: ",err)
    }

}

fetchCountries()
    .then(data => {
        nombresPaises = data.map(country => country.name.common);
        console.log(nombresPaises);
        listaPaises(nombresPaises);
    })