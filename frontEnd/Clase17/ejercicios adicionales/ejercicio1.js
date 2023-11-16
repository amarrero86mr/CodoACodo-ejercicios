// Cambiar Background - primer div
let primerDiv = document.querySelector('.cambiaColor');

let botonCambiaColor = document.querySelector(' .btnCambiaColor');

function aleatorio() {
    return Math.round(Math.random() * (255 - 0));
};

botonCambiaColor.addEventListener("click", function() {
    primerDiv.style.backgroundColor = `rgb( ${aleatorio()}, ${aleatorio()}, ${aleatorio()})`;
});

// Contador - Segundo Div - verción propia
/**
const cuenta = document.querySelector(".numeroContador");
let count = 0;

let btnDis = document.querySelector('.btnDisminuir');
let btnReset = document.querySelector('.btnResetear');
let btnIncre = document.querySelector('.btnIncrementar');

btnDis.addEventListener("click", function(){
    count--;
    cuenta.textContent = count;
    colorContador();
});
btnReset.addEventListener("click", function(){
    count=0;
    cuenta.textContent = count;
    colorContador();
});
btnIncre.addEventListener("click", function(){
    count++;
    cuenta.textContent = count;
    colorContador();
});

function colorContador(){
    if(count>0){
        cuenta.style.color = 'green';
    }else if(count<0){
        cuenta.style.color = 'red';
    }else{
        cuenta.style.color = 'black';
    }
}; */

//Contador - Segundo Div - verción tutorial
// tengo la sospecha que un evento dentro de un bucle no es la mejos seleccion para seguir programando....
let count = 0;
// select value and buttons
const value = document.querySelector(".numeroContador");
const btns = document.querySelectorAll(".btnC");
console.log(btns);

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("btnDisminuir")) {
      count--;
    } else if (styles.contains("btnIncrementar")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "black";
    }
    value.textContent = count;
  });
});

//carrusel de revisión - guiado por tutorial

const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.',
    },
];

// seleccionando items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const jobs = document.getElementById('jobs');
const info = document.getElementById('info');

const prevBtn= document.querySelector('.prev-btn');
const nextBtn= document.querySelector('.next-btn');
const randomBtn= document.querySelector('.random-btn');

let currentItem = 3;

window.addEventListener('DOMContentLoaded', function(){
    muestrPersona(currentItem);
});

function muestrPersona(persona) {
    const item = reviews[persona];
    img.src = item.img;
    author.textContent = item.name;
    jobs.textContent = item.job;
    info.textContent = item.text;
};

prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length -1;
    }    
    muestrPersona(currentItem);
});

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length -1){
        currentItem = 0;
    }    
    muestrPersona(currentItem);
});

randomBtn.addEventListener('click', function(){
    currentItem = Math.round(Math.random() * (3 - 0));
    muestrPersona(currentItem);
});