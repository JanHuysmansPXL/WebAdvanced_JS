//Maak daarna een script.
// Plaats in het script een array waarin twee objecten staan met volgende eigenschappen:
// The theory of everything Stephen Hawking
// Ja
// 12 rules for life Jordan Peterson Nee
// Titel
// Auteur
// Gelezen
// Zorg er via het script voor dat de twee objecten (met hun bijhorende eigenschappen)
// worden weergegeven op de webpagina als list-item van de ongeordende lijst.

let boek1 = ["The theory of everything", "Stephen Hawking", "Ja"];
console.log(boek1);

let boek2 = ["12 rules for life", "Jordan Peterson", "Nee"];
console.log(boek2);

let omschrijving = "";
for (eigenschap in boek1) {
    omschrijving = boek1[eigenschap];
    console.log(omschrijving);
}

// • Voeg een aside toe in de main met de adresgegevens van Hogeschool PXL.

let lijst = document.getElementById("lijst");
console.log(lijst);

let nieuwListitem = document.createElement("li");
let nieuwListitem2 = document.createElement("li");
let nieuwListitem3 = document.createElement("li");
console.log(nieuwListitem);

let tekstListitem = document.createTextNode(boek1[0]);
let tekstListitem2 = document.createTextNode(boek1[1]);
let tekstListitem3 = document.createTextNode(boek1[2]);

// NIEUWE LIST-ITEM TOEVOEGEN AAN LIJST-ELEMENT
lijst.appendChild(nieuwListitem);
lijst.appendChild(nieuwListitem2);
lijst.appendChild(nieuwListitem3);

// NIEUWE INHOUD TOEVOEGEN AAN DE LIJSTELEMENTEN (3 STUKS).
nieuwListitem.appendChild(tekstListitem);
nieuwListitem2.appendChild(tekstListitem2);
nieuwListitem3.appendChild(tekstListitem3);




