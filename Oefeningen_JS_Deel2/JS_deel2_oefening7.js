let getal1 = parseInt(prompt("geef een random geheel getal in"));
let getal2 = parseInt(prompt("geef een tweede geheel getal in"));
let uitkomst;

uitkomst = getal1 * getal2;

console.log(uitkomst);
document.getElementById("uitkomst").innerHTML = "De uitkomst van de vermenigvuldiging is: " + uitkomst;