// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
// Inport elements
// Wrappers
const titleWrapper = document.getElementById("title-wrapper");
const subtitleWrapper = document.getElementById("subtitle-wrapper");
const carousel = document.getElementById("carousel");
const mainWrapper = document.getElementById("main-img"); 

// Data Arrays
const titlesArray = images.map((item)=>{
    const title = item.title;
    return title;
})
const subtitleArray = images.map((item)=>{
    const subtitle = item.text;
    return subtitle;
})
const imgsArray = images.map((item)=>{
    const img = item.image;
    return img;
})

titlesArray.forEach((thisTitle)=>{
    titleWrapper.innerHTML += `<h1 class="title-wrappers">${thisTitle}</h1>`;  
})
subtitleArray.forEach((thisSubtitle)=>{
    subtitleWrapper.innerHTML += `<p class="subtitle-wrappers">${thisSubtitle}</p>`
})
imgsArray.forEach((thisImg)=>{
    carousel.innerHTML += `<img src="img/${thisImg}" class="imgs-carousel" alt="">`;
    mainWrapper.innerHTML += `<img src="img/${thisImg}" alt="" class="main-content">`;
})

// Start status
let position = 0;
const titleWrappers = document.querySelectorAll(".title-wrappers");
titleWrappers[position].classList.add("ms-active");
const subtitleWrappers = document.querySelectorAll(".subtitle-wrappers");
subtitleWrappers[position].classList.add("ms-active");
const imgsCarousel = document.querySelectorAll(".imgs-carousel");
imgsCarousel[position].classList.add("carousel-active");
const mainImgs = document.querySelectorAll(".main-content");
mainImgs[position].classList.add("ms-active");

// Nav
// Btns
const prevBtn = document.getElementById("pre-btn");
const nextBtn = document.getElementById("next-btn");
// Next-btn
 nextBtn.addEventListener("click", directionRight);
 
 // Prev-btn
 prevBtn.addEventListener("click", directionReverse);

//  AUTOPLAY
const reverseBtn = document.getElementById("reverse-btn");
const stopBtn = document.getElementById("stop-btn");

let autoplayDirection = true;
let autoplayStatus = true;
let autoplay = setInterval(directionRight, 3000);

// reverse btn
reverseBtn.addEventListener("click", function(){
    
    if (autoplayDirection) {
        autoplayDirection = false;
        clearInterval(autoplay);
        autoplay = setInterval(directionReverse, 3000)
    } else {
        autoplayDirection = true;
        clearInterval(autoplay);
        autoplay = setInterval(directionRight, 3000)
    }
    
})

// stop btn
stopBtn.addEventListener("click", function(){

    if(autoplayStatus){
        autoplayStatus = false;
        stopBtn.innerHTML = "Avvia lo scorrimento";
        clearInterval(autoplay)
    } else{
        autoplayStatus = true;
        if (autoplayDirection) {
            autoplay = setInterval(directionReverse, 3000);
        } else {
            autoplay = setInterval(directionRight, 3000);
        }
    }
})



// FUNCITIONS-----------------------------------
/**
 * Description: Left direction scroll carousel
 *
 */
function directionReverse(params) {
    // Remove active 
    titleWrappers[position].classList.remove("ms-active");
    subtitleWrappers[position].classList.remove("ms-active");
    imgsCarousel[position].classList.remove("carousel-active");
    mainImgs[position].classList.remove("ms-active");
    
     // Condiiton increse position
     if (position > 0) {
         position--;
     } else {
         position = images.length - 1;
     }
    
     // Add active
    titleWrappers[position].classList.add("ms-active");
    subtitleWrappers[position].classList.add("ms-active");
    imgsCarousel[position].classList.add("carousel-active");
    mainImgs[position].classList.add("ms-active");
}

/**
 * Description: Right direction scroll carousel
 *
 */
function directionRight() {
    // Remove active 
    titleWrappers[position].classList.remove("ms-active");
    subtitleWrappers[position].classList.remove("ms-active");
    imgsCarousel[position].classList.remove("carousel-active");
    mainImgs[position].classList.remove("ms-active");

 
     // Condiiton increse position
     if (position < images.length - 1) {
         position++;
     } else {
         position = 0;
     }
 
     // Add active
    titleWrappers[position].classList.add("ms-active");
    subtitleWrappers[position].classList.add("ms-active");
    imgsCarousel[position].classList.add("carousel-active");
    mainImgs[position].classList.add("ms-active");
}


