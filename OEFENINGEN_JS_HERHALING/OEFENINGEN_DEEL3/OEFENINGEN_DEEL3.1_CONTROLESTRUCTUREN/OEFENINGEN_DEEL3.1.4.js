//Schrijf een programma waarmee je kan controleren hoe laat het momenteel is.
// Toon het tijdstip én dagdeel (voormiddag of namiddag)
// met behulp van een welkomszin op de webpagina.


let weekdagen = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
let maanden = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "Oktober", "November", "December"];

let datum = new Date;

let huidigeDagIndex = datum.getDay();
let huidigeDagNaam = weekdagen[huidigeDagIndex].toLowerCase();
let huidigeDag = datum.getDate();

let huidigeMaand = datum.getMonth() + 1;
let huidigeMaandNaam = maanden[huidigeMaand];

let huidigJaar = datum.getFullYear();
let huidigUur = datum.getHours();

let dagdeel;

if (huidigUur >= 7 && huidigUur < 12) {
    dagdeel = "Goedemorgen";
}
else if (huidigUur >= 12 && huidigUur < 18) {
    dagdeel = "Goede dag";
}
else {
    dagdeel = "Goede avond";
}

console.log(datum);
console.log(weekdagen);
console.log(huidigeDagNaam);
console.log(huidigeDagIndex);
console.log(huidigeDag);
console.log(huidigeMaand);
console.log(huidigJaar);

document.getElementById("respons").innerHTML = dagdeel + ", het is vandaag " + huidigeDagNaam + " " + huidigeDag + " " + huidigeMaandNaam + " " + huidigJaar+ ".";