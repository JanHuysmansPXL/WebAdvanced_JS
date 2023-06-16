let persoon = {
    naam: "Huysmans",
    voornaam: "Jan",
    telefoonnummer: "0472752284",
    geboortedatum: "16/09/1992",
    mailadres: "jan_huysmans@outlook.com"
}

console.log(persoon);

document.getElementById("naam").innerHTML = persoon.naam;
document.getElementById("voornaam").innerHTML = persoon.voornaam;
document.getElementById("telefoon").innerHTML = persoon.telefoonnummer;
document.getElementById("geboortedatum").innerHTML = persoon.geboortedatum;
document.getElementById("mailadres").innerHTML = persoon.mailadres;

