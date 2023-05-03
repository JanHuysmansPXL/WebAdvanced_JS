/*• Pas de tekstkleur van de paragraaf met de id ‘red’ aan naar donkerrood. */

document.getElementById("red").style.color = "darkRed";

/* • Verwijder de paragraaf met de id ‘weg’. */

let verwijderParagraaf = document.getElementById("weg");
verwijderParagraaf.remove();

/* Voeg een hoofding van niveau 1 toe in de header van de webpagina met de tekst
‘Welkom PandiX’. */

let nieuweHoofding = document.createElement("h1");
nieuweHoofding.id = "nieuw";

let tekstNieuweHoofding = document.createTextNode("Welkom PandiX");
nieuweHoofding.appendChild(tekstNieuweHoofding);

document.getElementById("header").appendChild(nieuweHoofding);

/* • Voeg een aside toe in de main met de adresgegevens van Hogeschool PXL. */

let nieuweAside = document.createElement ("aside");
nieuweAside.id = "adresblok";

let adres = document.createTextNode("Elfde-Liniestraat 24, 3500 Hasselt");
nieuweAside.appendChild(adres);

document.getElementById("main").appendChild(adres);
document.getElementById("adresblok").appendChild(nieuweAside);
