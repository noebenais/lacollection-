// fichier script.js
// un tableau contenant les sources des images à afficher
const images = [
    "img/image2.jpeg",
    "000156618.jpeg",
    "img/image>.png",
    "img/image3.png",
    "img/000156618.jpeg",
    "img/pp.png",
    "img/collection.png",

];
var fin = 0
// un tableau contenant les textes à afficher
const texts = [
];

// une fonction qui renvoie un nombre aléatoire entre min et max (inclus)
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// une fonction qui crée et ajoute une image aléatoire dans le conteneur
function addImage() {fin= fin+1;
    if (fin > 50){
        return;
    }
    // on crée un élément img
    let img = document.createElement("img");

    img.className = "truc";
    // on lui attribue une source aléatoire parmi le tableau des images
    img.src = images[random(0, images.length - 1)];
    // on lui donne une largeur et une hauteur aléatoires entre 100 et 500 pixels
    // on lui donne une position aléatoire dans le conteneur
    img.style.top = random(0, window.innerHeight *3 - img.height) + "px";
    img.style.left = random(0, window.innerWidth - img.width) + "px";
    // on lui donne une rotation aléatoire entre 0 et 180 degrés
    img.style.transform = "rotate(" + random(0, 180) + "deg)";
    // on lui donne un indice de profondeur aléatoire entre 0 et 100
    img.style.zIndex = random(0, 100);
    // on ajoute l'image au conteneur
    document.getElementById("container3").appendChild(img);
}

// une fonction qui crée et ajoute un texte aléatoire dans le conteneur
function addText() {
    // on crée un élément span
    let span = document.createElement("span");
    // on lui attribue un texte aléatoire parmi le tableau des textes
    span.textContent = texts[random(0, texts.length - 1)];
    // on lui donne une position aléatoire dans le conteneur
    span.style.top = random(0, window.innerHeight - span.offsetHeight) + "px";
    span.style.left = random(0, window.innerWidth - span.offsetWidth) + "px";
    // on lui donne un indice de profondeur aléatoire entre 0 et 100
    span.style.zIndex = random(0, 100);
    // on ajoute le texte au conteneur
    document.getElementById("container3").appendChild(span);
}

// on appelle les fonctions addImage et addText toutes les 500 millisecondes
setInterval(addImage, 500);
setInterval(addText, 500);
