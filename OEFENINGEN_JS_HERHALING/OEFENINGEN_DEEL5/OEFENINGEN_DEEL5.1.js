//Maak daarna een script dat de tekst die de bezoeker invult in het tekstvak,
// weergeeft in de lege paragraaf na het klikken op de knop ‘Tonen’.
//
// Klikt de gebruiker meermaals op de knop, wordt de tekst in de lege paragraaf vernieuwd. (if?)


//Knop definiëren en eventlistener voor click.
// De functie 'tekstWeergeven' loopt bij het klikken.

let knop = document.getElementById("knop");
console.log(knop);
knop.addEventListener('click', tekstWeergeven);

//De Lege paragraaf selecteren uit de HTML en aan de variable toewijzen.
let legeParagraaf = document.getElementById("legeParagraaf");
console.log(legeParagraaf);
let leeg = "";

function tekstWeergeven() {

    // Waarde uit het tekstvak ophalen met .value en in variable 'inputTekst' zetten
    let inputTekst = document.getElementById("tekstvak").value;

    if (inputTekst) {

//Nieuwe Tekst-Node voor het bestaande <p> element in de html.
    let inhoudParagraaf = document.createTextNode(inputTekst);
    console.log(inhoudParagraaf);

// Text-node in de paragraaf steken.
    let nieuweTekst = legeParagraaf.appendChild(inhoudParagraaf);
    console.log(nieuweTekst);
    console.log(legeParagraaf);

    } else {
//Lege Tekst-Node voor het bestaande <p> element in de html.
    let inhoudParagraaf = document.createTextNode(leeg);
    console.log(inhoudParagraaf);

// Text-node in de paragraaf steken.
    let nieuweTekst = legeParagraaf.appendChild(inhoudParagraaf);
    console.log(nieuweTekst);
    console.log(legeParagraaf);
    }
}
