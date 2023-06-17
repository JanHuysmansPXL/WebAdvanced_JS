//Kopieer de vorige oefening en pas deze aan. Zorg ervoor dat er
// "per klik op de knop ‘Tonen; een nieuwe paragraaf wordt aangemaakt"
// met de tekst uit het tekstvak.
// De paragrafen komen allemaal onder elkaar te staan op de webpagina. -> Linebreak?

let knop = document.getElementById("knop");
console.log(knop);
knop.addEventListener('click', tekstWeergeven);

//De Lege paragraaf selecteren uit de HTML en aan de variable toewijzen.
let legeParagraaf = document.getElementById("legeParagraaf");
console.log(legeParagraaf);

let box = document.getElementById("box");

function tekstWeergeven() {

    // Nieuwe Paragraaf aanmaken.
    let nieuweParagraaf = document.createElement("p");

    // Waarde uit het tekstvak ophalen met .value en in variable 'inputTekst' zetten
    let inputTekst = document.getElementById("tekstvak").value;

    //Nieuwe Tekst-Node voor het bestaande <p> element in de html. Met inhoud uit tekstvak.
    let inhoudParagraaf = document.createTextNode(inputTekst);
    let lineBreak = document.createElement("br");
    console.log(inhoudParagraaf);

    // Text-node in de nieuw gemaakte paragraaf steken.
    let nieuweTekst = nieuweParagraaf.appendChild(inhoudParagraaf);
    console.log(nieuweTekst);
    console.log(nieuweParagraaf);

    box.appendChild(nieuweParagraaf);
    nieuweParagraaf.appendChild(lineBreak);
}
