// Vraag aan de bezoeker een random getal tussen 0 en 100 via twee aparte promptvensters
// trek de twee van elkaar af
// Is de uitkomst negatief, geef dan de uitkomst weer in een paragraag op de webpagina
// in het rood, vet en 24px lettergrootte
// Is de uitkomst positief, geef dan de uitkomst weer in een paragraag op de webpagina
// in het groen, cursief en 24px lettergrootte
// je mag in het HTML document enkel de link naar het script plaatsen
//
let getal1 = parseInt(prompt("Geef een geheel getal tussen 0 & 100", "0-100"));
let getal2 = parseInt(prompt("Geef een tweede getal tussen 0 & 10.", "0-100"));
let uitkomst = getal2 - getal1;

if (uitkomst < 0) {
    let uitkomstNegatief = document.createElement("p");
    let uitkomstNegatiefText = document.createTextNode("De uitkomst is negatief " + uitkomst);
    uitkomstNegatief.appendChild(uitkomstNegatiefText);
    document.getElementsByTagName("body")[0].appendChild(uitkomstNegatief);
    document.getElementsByTagName("p")[0].style.color = "#f00";
    document.getElementsByTagName("p")[0].style.fontWeight = "bold";
    document.getElementsByTagName("p")[0].style.fontSize = "24px";
}
else {
    let uitkomstPositief = document.createElement("p");
    let uitkomstPositiefText = document.createTextNode("De uitkomst is positief " + uitkomst);
    uitkomstPositief.appendChild(uitkomstPositiefText);
    document.getElementsByTagName("body")[0].appendChild(uitkomstPositief);
    document.getElementsByTagName("p")[0].style.color = "#00ff00";
    document.getElementsByTagName("p")[0].style.fontStyle = "italic";
    document.getElementsByTagName("p")[0].style.fontSize = "24px";
}






