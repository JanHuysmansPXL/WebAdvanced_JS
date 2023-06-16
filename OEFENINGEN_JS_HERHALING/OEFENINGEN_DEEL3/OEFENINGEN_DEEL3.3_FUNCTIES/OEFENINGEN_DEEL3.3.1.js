// Schrijf een functie ‘vermenigvuldig()’.
// De output van de functie bevat
// de vermenigvuldiging van twee getallen
// die je zelf mag kiezen.
// De output wordt getoond op de webpagina.

let x;
let y;


function vermenigvuldig(x, y) {
    x = parseInt(prompt("Geef een getal in:"));
    y = parseInt(prompt("Geef nog een getal in:"));
    return x * y;
}

resultaat = vermenigvuldig(x,y);
console.log(resultaat);

document.getElementById("respons").innerHTML = "Het product van de 2 getallen is: " + resultaat;