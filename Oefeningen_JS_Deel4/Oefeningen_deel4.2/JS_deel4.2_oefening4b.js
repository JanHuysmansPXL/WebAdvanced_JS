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
let eigenschap;
let outputArray;
let uitkomst= "";
let teller = 0;

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

let nieuwListitem = document.createElement("li");
let tekstNieuwListitem;


for (eigenschap in boek1) {
    uitkomst += eigenschap + "<br>";
    outputArray = uitkomst.split("<br>")
    outputArray.pop();
    nieuwListitem.appendChild(outputArray[teller]);
    teller ++;
}

tekstNieuwListitem = document.createTextNode(outputArray[teller]);


document.getElementById("lijst").appendChild(tekstNieuwListitem);


console.log(outputArray);
console.log(boek1);
console.log(boek2);
console.log(uitkomst);

