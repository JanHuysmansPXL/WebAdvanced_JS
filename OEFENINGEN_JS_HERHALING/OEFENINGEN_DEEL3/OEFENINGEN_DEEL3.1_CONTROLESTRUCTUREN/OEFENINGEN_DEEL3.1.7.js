//Schrijf een programma waarmee je kan
// controleren in welke maand we ons momenteel bevinden.
// Toon de maand met behulp van een welkomszin op de webpagina.

let datum = new Date;
let huidigeMaandIndex = datum.getMonth() +1;

let maanden = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "Oktober", "November", "December"];
let huidigeMaand = maanden[huidigeMaandIndex].toLowerCase();

console.log(datum);
console.log(huidigeMaandIndex);
console.log(huidigeMaand);

document.getElementById("respons").innerHTML = "We zijn in de maand: " + huidigeMaand + "."