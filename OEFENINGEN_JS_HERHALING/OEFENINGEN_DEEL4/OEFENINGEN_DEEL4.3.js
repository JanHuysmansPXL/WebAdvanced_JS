//Plaats de HTML-pagina ‘oefening3.html’ in je Webstorm-project.
// Voer volgende wijzigingen aan de HTML-pagina door via een script:

// OK • Pas de tekstkleur van de paragraaf met de id ‘red’ aan naar donkerrood.

let paragraafRood = document.getElementById("red");
paragraafRood.style.color = "darkRed";

// OK • Verwijder de paragraaf met de id ‘weg’.

let paragraafWeg = document.getElementById("weg");
paragraafWeg.style.display = "none";

// • Voeg een hoofding van niveau 1 toe in de header van de webpagina met de tekst ‘Welkom PandiX’.

let headerTekst = document.getElementById("header");
let nieuweHoofding = document.createElement("h1");
let hoofdingTekst = document.createTextNode("Welkom PandiX.");
headerTekst.appendChild(nieuweHoofding);
nieuweHoofding.appendChild(hoofdingTekst);

// • Voeg een aside toe in de main met de adresgegevens van Hogeschool PXL.

let main = document.getElementById("main");
let nieuweAside = document.createElement("aside");

let nieuweHeaderAside = document.createElement("h4");

let nieuweParagraafAside = document.createElement("p");
let nieuweParagraaf2Aside = document.createElement("p");

let hoofdingAside = document.createTextNode("Dit is de Aside");

let paragraafAside = document.createTextNode("Adresgegevens 1");
let paragraaf2Aside = document.createTextNode("Adresgegevens 2");

// NIEUWE ASIDE TOEVOEGEN AAN DE MAIN
main.appendChild(nieuweAside);

// NIEUWE HEADER TOEVOEGEN AAN DE ASIDE (H4)
nieuweAside.appendChild(nieuweHeaderAside);
nieuweHeaderAside.appendChild(hoofdingAside);

// NIEUWE PARAGRAFEN TOEVOEGEN AAN DE ASIDE (2 STUKS).
nieuweAside.appendChild(nieuweParagraafAside);
nieuweAside.appendChild(nieuweParagraaf2Aside);

// TEKSTNODE TOEVOEGEN AAN DE PARAGRAAF IN DE ASIDE - (TEXT-NODE IN P-ELEMENT IN ASIDE-ELEMENT IN MAIN.)
nieuweParagraafAside.appendChild(paragraafAside);
nieuweParagraaf2Aside.appendChild(paragraaf2Aside);

// + STIJL AANPASSEN.
nieuweParagraafAside.style.fontStyle = 'italic';
nieuweParagraaf2Aside.style.fontStyle = 'italic';


