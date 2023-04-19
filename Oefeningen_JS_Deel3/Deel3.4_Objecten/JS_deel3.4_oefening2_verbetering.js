let persoon = {
    naam: 'Huysmans',
    voornaam: 'Jan',
    geboortedatum: '16-09-1992',
    telefoonnummer: '0472752284',
    mailadres: 'jan_huysmans@outlook.com'
}

function persoonWeergeven (persoon) {
    document.getElementById("naam").innerHTML = persoon.naam;
    document.getElementById("voornaam").innerHTML = persoon.voornaam;
    document.getElementById("geboortedatum").innerHTML = persoon.geboortedatum;
    document.getElementById("telefoon").innerHTML = persoon.telefoonnummer;
    document.getElementById("mail").innerHTML = persoon.mailadres;

}

persoonWeergeven(persoon);