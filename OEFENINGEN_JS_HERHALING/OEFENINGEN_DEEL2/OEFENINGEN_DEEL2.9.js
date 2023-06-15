let getal1 = parseFloat(prompt("Geef een eerste getal in", "1-10"));
let getal2 = parseFloat(prompt("Geef een tweede getal in", "1-10"));

let som = getal1 + getal2;
let verschil = getal1 - getal2;
let quotient = getal1 / getal2;
let product = getal1 * getal2;

document.getElementById("som").innerHTML = "De som van de twee getallen is: " + som + ".";
document.getElementById("verschil").innerHTML = "Het verschil tussen de twee getallen is: " + verschil + ".";
document.getElementById("quotient").innerHTML = "Het quotient van de twee getallen is: " + quotient + ".";
document.getElementById("product").innerHTML = "Het product van de twee getallen is: " + product + ".";
