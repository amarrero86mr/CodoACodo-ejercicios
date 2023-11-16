//1 Cambiar la imagen
const imgPort = document.querySelector('#imagenPortada');
imgPort.setAttribute('src', 'https://picsum.photos/id/0/200/200');


//2 Cambiar enlace de "contactar"
let contact = document.querySelector('#contacto');
contact.setAttribute('href', 'https://www.google.com');

//3 Cambiar subtitulo "notebook" por título de modelo
let tituloNote = document.getElementById('titulo');
tituloNote.textContent = "New Notebook ASAS Fire15"

//4 Cambiar titulo "venta de computadoras"
let tituloVent = document.querySelector('.tituloVentas');
tituloVent.textContent = "";
let tituloVentaTexNode = document.createTextNode('HiperCompuMegaRed Maquinones');
tituloVent.appendChild(tituloVentaTexNode);

//5 Cambiar Estilo del título principal
tituloVent.style.backgroundColor = "darkred";
tituloVent.style.color = "silver";
tituloVent.style.textAlign = "center";

//6 Cambiar el párrafo por un texto real
let parrafo = document.querySelector('.parrafo');
parrafo.textContent='Disfrutá de la perfecta combinación de rendimiento y diseño con esta notebook ASAS Fire15. Encontrarás en ella una excelente herramienta para tus trabajos de todos los días y para tus momentos de entretenimiento. Aprovechá la experiencia extraordinaria que la marca tiene para ofrecerte y optimizá la calidad de tus imágenes y videos.'
parrafo.setAttribute('class', 'parrafoestilo');

//7 Crear el precio Crear HTML y aplicar un precio
let ladoDerecho = document.querySelector('.der')
let precio = document.createElement('div');
precio.innerHTML = '<a href="#" class="precio" >A solo: $456647.-</a>';
ladoDerecho.appendChild(precio);

//8 Botón de especificaciones, aplicarle un evento "clic" -Para que despliegue las especificaciones

let btnLista = document.querySelector('#boton');

btnLista.addEventListener("click", function() {
    let lista = document.querySelector('ul');
    lista.setAttribute("class", "mostrar");
});

//9 Form de “mantenerme informado”, tomar el valor al hacer clic - Para enviar su información luego
let formulario = document.querySelector('#form');

formulario.addEventListener('submit', function() { 
    let mail = document.querySelector('#email').value;
    console.log(mail);

    fetch("https://formsubmit.co/ajax/amarrero86mr@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: "FormSubmit",
            message: mail,
        })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));

});