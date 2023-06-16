//Schrijf een programma dat aan de bezoeker van de webpagina een random getal.

// Indien het random getal van de gebruiker lager ligt dan 50, dan toon je op de webpagina ‘Te laag’.
// Indien het random getal gelijk is aan 50, dan toon je ‘Proficiat, goed gegokt’
// en indien het random getal hoger is dan 50, toon je ‘Te hoog’.

let inputGebruiker = parseInt(prompt("geef een random getal in"));
let uitkomst = " ";

if (inputGebruiker < 50) {
    document.getElementById("respons").innerHTML = "Te laag.";
    uitkomst = "Te laag.";
}
else if (inputGebruiker === 50) {
    document.getElementById("respons").innerHTML = "Perfect";
    uitkomst = "Perfect."
}
else if (inputGebruiker > 50) {
    document.getElementById("respons").innerHTML = "Te Hoog";
    uitkomst = "Te Hoog"
}

console.log(uitkomst);