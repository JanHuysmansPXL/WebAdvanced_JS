//Kopieer het volledige object uit de vorige oefening en voeg volgende privégegevens toe als eigenschappen met waarden:
// • Lengte
// • Gewicht
// • Leeftijd
// • Huidskleur • Oogkleur
// Itereer (loop) over de eigenschappen van het object en geef ze weer op de webpagina.

let overzicht = "";
let persoon = {
    naam: "Huysmans",
    voornaam: "Jan",
    telefoonnummer: "0472752284",
    geboortedatum: "16/09/1992",
    mailadres: "jan_huysmans@outlook.com",
    lengte: 172,
    gewicht: 71,
    leeftijd: 30,
    huidskleur: "blank",
    oogkleur: "groen"
}

for (eigenschap in persoon) {
    console.log(eigenschap);
    overzicht = overzicht + eigenschap + "<br>";
    document.getElementById("uitkomst").innerHTML = overzicht;
}

let persoonArray = Object.values(persoon);
let waarden = "";

for (let teller = 0; teller <= persoonArray.length; teller++) {
    waarden = waarden + persoonArray[teller] + "<br>";
    document.getElementById("uitkomst2").innerHTML = waarden;
}