// Maak een script dat
// OK - De tekst die de bezoeker invult in het tekstvak, toont in de lege paragraaf,
// OK - Na het klikken op de knop ‘Tonen’.
// OK - Klikt de gebruiker meermaals op de knop ‘Tonen’,
// OK - wordt de tekst in de paragraaf opgehoogd.
//
// OK - De laatste nieuwe informatie in de paragraaf wordt altijd in het VET en ROOD weergegeven.
// OK - Wanneer de bezoeker klikt op de knop ‘Wissen’
// OK - wordt de volledige tekst in de paragraaf gewist.

// TELLER ALGEMEEN NUL
let teller = 0;

// KNOPPEN GEDEFINIEERD
let knopTonen = document.getElementById("knopTonen");
let knopWissen = document.getElementById("knopWissen");

let tekstvak = document.getElementById("tekstvak");
let paragraaf = document.getElementById("paragraaf");

//EVENT- LISTENERS MET BUTTON - CLICK INTERACTIE NAAR FUNCTIES.
knopTonen.addEventListener("click", tekstTonen);
knopWissen.addEventListener("click", tekstWissen);


function tekstTonen() {
    // TELLER HOOGT OP PER CLICK.
    teller++

    // NIEUWE "SPAN" IS ELEMENT - EN KRIJGT EEN ID met .id - OPTELLEN KAN !!
    let span = document.createElement("span");
    span.id = "span" + [teller];

    // INHOUD TEKSTVAK TOEVOEGEN AAN DE NIEUWE SPAN
    span.appendChild(document.createTextNode(document.getElementById("tekstvak").value));

    // TEKST TOEVOEGEN AAN DE PARAGRAAF.
    paragraaf.appendChild(span);

    // Linebreak na element - OPHOGEN..
    let linebreak = document.createElement("br");
    paragraaf.appendChild(linebreak);

    // LOGGING
    console.log(tekstvak.value);
    console.log(span);
    console.log(teller);

    // LAATSTE SPAN ROOD MAKEN EN LETTERDIKTE WIJZIGEN
    document.getElementById("span" + teller).style.color = "red";
    document.getElementById("span" + teller).style.fontWeight = "bold";

    // VOORLAATSTE SPAN TERUG ZWART MAKEN EN LETTERDIKTE WIJZIGEN
    // (LOOP DUS TELKENS DE NIEUWE VOORLAATSTE)
    document.getElementById("span" + (teller - 1)).style.color = "black";
    document.getElementById("span" + (teller - 1)).style.fontWeight = "400";

}

// TEKST WISSEN - RESET NAAR "";
function tekstWissen() {
    teller = 0
    paragraaf.innerHTML = "";
}
console.log(paragraaf);