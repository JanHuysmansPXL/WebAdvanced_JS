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

let boek1 = {
  titel: "The Theory of Everything",
  auteur: "Stephen Hawking",
  gelezen: "Ja"
}

let boek2 = {
    titel: "12 rules for life",
    auteur: "Jordan Peterson",
    gelezen: "Nee"
}

let lijst = document.getElementById("lijst");

let text = "";
for (let eigenschap in boek1) {
    text += boek1[eigenschap] + ".";
}

console.log(text);

let zinArray = text.split(".");
zinArray.pop();
console.log(zinArray);

let lengteZin = zinArray.length;
console.log(zinArray.length);

let newListItem = document.createElement("li");
newListItem.id = "lijstitem";


for (eigenschap in boek1) {
    console.log(newListItem)
    newListItem.appendChild(document.createTextNode(eigenschap));
    lijst.appendChild(newListItem);
}

