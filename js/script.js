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

console.log(images);

// Inport elements
// Wrappers
const titleWrappers = document.getElementsByClassName("title-wrappers");

const subtitleWrappers = document.getElementsByClassName("subtitle-wrappers");

// Btns
const prevBtn = document.getElementById("pre-btn");
const nextBtn = document.getElementById("next-btn");

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

titlesArray.forEach((title, index)=>{
    titleWrappers[index].innerHTML = `${title}`;
})

subtitleArray.forEach((subtitle, index)=>{
    subtitleWrappers[index].innerHTML = `${subtitle}`;
})

nextBtn.addEventListener("click", function() {
    
    
    
})
