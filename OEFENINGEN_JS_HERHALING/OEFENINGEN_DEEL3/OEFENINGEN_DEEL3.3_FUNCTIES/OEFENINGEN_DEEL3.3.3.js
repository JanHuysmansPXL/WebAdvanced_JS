//Schrijf een functie ‘isVijftig()’.

// De bezoeker van de webpagina mag twee random getallen tussen 0 en 100 ingeven.

// De output van de functie bevat de tekst ‘Hoera VIJFTIG’ indien:
// Één van de twee getallen 50 is.
// De som van de twee getallen 50 is.
// De output wordt getoond op de webpagina.

let invoerGetal1 = parseInt(prompt("Geef een getal in tussen 1 en 100:", "1-100"));
let invoerGetal2 = parseInt(prompt("Geef een tweede getal in tussen 1 en 100:", "1-100"));
let boodschap = "";

function isVijftig(getal1,getal2) {
    if (getal1 + getal2 === 50) {
        boodschap = "Hoera Vijftig";
    }
    else if (getal1 === 50 || getal2 === 50) {
        boodschap = "Hoera Vijftig";
    }
    return boodschap;
}

console.log(isVijftig(invoerGetal1, invoerGetal2));
console.log(invoerGetal1);
console.log(invoerGetal2);

document.getElementById('respons').innerHTML = boodschap;

