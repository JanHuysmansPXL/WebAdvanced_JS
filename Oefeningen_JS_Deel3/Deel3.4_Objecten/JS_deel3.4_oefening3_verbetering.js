let uitkomst = "";
let eigenschap;

let persoon = {
    naam: 'Huysmans',
    voornaam: 'Jan',
    geboortedatum: '16-09-1992',
    mailadres: 'jan_huysmans@outlook.com',
    telefoonnummer: '0472752284'
}

persoon.lengte = "172cm";
persoon.leeftijd = "30 jaar";

console.log(persoon);

for (eigenschap in persoon) {
    uitkomst = uitkomst + eigenschap + ": " + persoon[eigenschap] + "<br>";
}

document.getElementById("uitkomst").innerHTML = uitkomst;