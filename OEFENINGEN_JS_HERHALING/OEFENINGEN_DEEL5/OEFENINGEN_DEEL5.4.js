// Maak daarna een script dat:
// de tekst van de titel en de paragrafen vergroot
// wanneer de bezoeker klikt op de knop ‘Groter’.
// De paragrafen moeten dan ‘24px’ groot worden
// en de titel moet ‘48px’ groot worden.

// Wanneer de bezoeker op de knop ‘kleiner’ klikt,
// moeten de paragrafen ‘14px’ groot worden en de titel ‘22px’.

// TELLER ALGEMEEN NUL
let teller = 0;

// KNOPPEN GEDEFINIEERD
let knopGroter = document.getElementById("knopGroter");
let knopKleiner = document.getElementById("knopKleiner");

knopGroter.addEventListener("click", tekstGroter);
knopKleiner.addEventListener("click", tekstKleiner);

function tekstGroter() {
    // -1 OMWILLE VAN INDEX
    let aantalHeaders = document.getElementsByClassName("titel").length - 1;
    for (let teller = 0; teller <= aantalHeaders; teller++) {
        document.getElementsByClassName("titel")[teller].style.fontSize = "48px";
    }
    let aantalParagrafen = document.getElementsByTagName("p").length -1;
    for (let teller = 0; teller <= aantalParagrafen; teller++) {
            document.getElementsByTagName("p")[teller].style.fontSize = "24px";
        }
}

function tekstKleiner() {
    let aantalHeaders = document.getElementsByClassName("titel").length - 1;
    for (let teller = 0; teller <= aantalHeaders; teller++) {
        document.getElementsByClassName("titel")[teller].style.fontSize = "22px";
    }
    let aantalParagrafen = document.getElementsByTagName("p").length -1;
    for (let teller = 0; teller <= aantalParagrafen; teller++) {
        document.getElementsByTagName("p")[teller].style.fontSize = "14px";
    }

}

/*
function tekstKleiner() {
    if (statusTekstGrootte === "groot") {
        document.getElementsByTagName("p").style.fontSize = "14px";
        document.getElementsByTagName("h1").style.fontSize = "22px";
        statusTekstGrootte = "klein";
    }
    else if (statusTekstGrootte === "") {
        document.getElementsByTagName("p").style.fontSize = "14px";
        document.getElementsByTagName("h1").style.fontSize = "22px";
        statusTekstGrootte = "klein";
    }
}

*/
