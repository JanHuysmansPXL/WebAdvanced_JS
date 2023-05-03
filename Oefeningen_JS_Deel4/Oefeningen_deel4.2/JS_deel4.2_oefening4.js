/*
Maak een webpagina met een titel ‘Boekenlijst’ en een lege ongeordende lijst zonder listitems.
Geef de ongeordende lijst een id.
Maak daarna een script.
Plaats in het script een array waarin twee objecten staan met volgende eigenschappen:

Titel   The theory of everything    12 rules for life
Auteur  Stephen Hawking             Jordan Peterson
Gelezen Ja                          Nee

Zorg er via het script voor dat de twee objecten (met hun bijhorende eigenschappen)
worden weergegeven op de webpagina als listitem van de ongeordende lijst. */
let uitkomst = "";
let eigenschap;
let teller = 0;

let boek1 = {
  titel: "The Theory of Everything",
  auteur: "Stephen Hawking",
  gelezen: "Ja"
};

let boek2 = {
    titel: "12 rules for life",
    auteur: "Jordan Peterson",
    gelezen: "Nee"
};

let rij1 = document.getElementsByTagName("tr")[0];
let nieuweData = document.createElement ("td");
let input = document.createTextNode("");


console.log(boek1);
console.log(boek2);
console.log(boek2.titel)
console.log(rij1);

for (eigenschap in boek1) {

    input = input + eigenschap + "<br>";
    document.nieuweData[teller].innerText = eigenschap;
    rij1.appendChild(nieuweData);
    nieuweData.appendChild(input);
    teller++;
}

/*
for (eigenschap in boek1) {

    uitkomst = uitkomst + eigenschap + "<br>";
    document.getElementsByTagName("th")[teller].innerText = eigenschap;
    teller++;
}
*/


uitkomst = "";
teller= 0;


console.log(uitkomst);
console.log(eigenschap1);

// document.getElementsByTagName("th")[0].innerText = "Titel";
// document.getElementsByTagName("th")[1].innerText = "Auteur";
// document.getElementsByTagName("th")[2].innerText = "Gelezen";