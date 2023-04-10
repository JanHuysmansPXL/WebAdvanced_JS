let getal1 = parseFloat(prompt("geef een random getal in"));
let getal2 = parseFloat(prompt("geef een tweede getal in"));

let product = getal1 * getal2;
let quotient = getal1 / getal2;
let verschil = getal1 - getal2;
let som = getal1 + getal2;

document.getElementById("uitkomst1").innerHTML = "De uitkomst van de vermenigvuldiging is: " + product;
document.getElementById("uitkomst2").innerHTML = "De uitkomst van de deling is: " + quotient;
document.getElementById("uitkomst3").innerHTML = "Het verschil is: " + verschil;
document.getElementById("uitkomst4").innerHTML = "De som is: " + som;