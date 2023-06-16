// Schrijf een functie ‘verschil()’.
// De output van de functie bevat
// het verschil tussen een getal dat de bezoeker mag ingeven en het getal 100.
// De output wordt getoond in de console.

let inputBezoeker = parseInt(prompt("Geef een getal in:"));

function verschil(input) {
    return input - 100;
}

document.getElementById("respons").innerHTML = "Het verschil met 100 is: " + verschil(inputBezoeker);