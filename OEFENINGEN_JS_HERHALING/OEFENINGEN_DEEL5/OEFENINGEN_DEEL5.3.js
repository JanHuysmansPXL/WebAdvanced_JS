// Maak een script dat
// OK - De tekst die de bezoeker invult in het tekstvak, toont in de lege paragraaf,
// OK - Na het klikken op de knop ‘Tonen’.
// OK - Klikt de gebruiker meermaals op de knop ‘Tonen’,
// OK - wordt de tekst in de paragraaf opgehoogd.
//
// De laatste nieuwe informatie in de paragraaf wordt altijd in het VET en ROOD weergegeven.
// OK - Wanneer de bezoeker klikt op de knop ‘Wissen’
// OK - wordt de volledige tekst in de paragraaf gewist.

let knopTonen = document.getElementById("knopTonen");
let knopWissen = document.getElementById("knopWissen");

//De Lege paragraaf selecteren uit de HTML en aan de variable toewijzen.
let paragraaf = document.getElementById("paragraaf");

let invoer = "";

knopTonen.addEventListener('click', tonen);
knopWissen.addEventListener('click', tekstWissen);

function tonen() {

// Info uit de INVOER halen (TEKSTVAK) en declareren.
    invoer = document.getElementById("tekstvak").value;
    console.log(invoer);

// Waarde van de ingevoerde tekst (INVOER) in een textnode steken.
    let nieuweTekst = document.createTextNode(invoer);
    let lineBreak = document.createElement("br");
    console.log(nieuweTekst);
//Tekst-node met ingevoerde tekst aan de paragraaf hangen.
    paragraaf.appendChild(nieuweTekst);
    console.log(paragraaf);
// Linebreak toevoegen aan de tekst.
    paragraaf.appendChild(lineBreak);
    console.log(paragraaf);
    // AANPASSEN KLEUR
    console.log(paragraaf.textContent);
}


// TEKST WISSEN - RESET NAAR "";
function tekstWissen() {
    paragraaf.innerHTML = "";
}