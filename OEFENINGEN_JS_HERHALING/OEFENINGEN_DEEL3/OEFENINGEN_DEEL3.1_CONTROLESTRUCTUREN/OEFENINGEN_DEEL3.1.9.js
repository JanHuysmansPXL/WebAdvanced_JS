//OK--Schrijf een programma dat aan de bezoeker van de webpagina
//OK--Een getal van 1 tot en met 10 vraagt.
//OK--Geef op de webpagina de bijhorende maaltafels weer onder elkaar.
// Bouw in dat de bezoeker enkel een getal van 1 tot en met 10 kan ingeven.
// Geeft de bezoeker een getal lager dan 0 of hoger dan 10 in,
// moet de boodschap ‘Niet mogelijk’ getoond worden op de webpagina.

let inputGebruiker = prompt("Geef een getal in tussen 1 en 10", "1-10");
let maaltafel = "";
console.log(inputGebruiker);

if ((inputGebruiker > 0) && (inputGebruiker <= 10)) {
    // Uitvoeren van de maaltafel met input van de gebruiker en linebreak.
    for (let teller = 1; teller <= 10; teller++) {
        maaltafel = maaltafel + teller + " \* " + inputGebruiker + " = " + (inputGebruiker * teller) + "<br>";
        document.getElementById("respons").innerHTML = maaltafel;
    }
}
else if (inputGebruiker < 0 || inputGebruiker > 10) {
    alert("Helaas niet mogelijk !")
}

console.log(maaltafel);
console.log(inputGebruiker > 0) || (inputGebruiker <= 10);
