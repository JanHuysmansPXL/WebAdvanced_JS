let persoon = {
    naam: 'Huysmans',
    voornaam: 'Jan',
    telefoonnummer: '0472752284',
    mailadres: 'jan_huysmans@outlook.com',
    woonplaats: 'Antwerpen'
}

function persoonWeergeven (persoon) {
    document.getElementById("naam").innerHTML = persoon.naam;
    document.getElementById("voornaam").innerHTML = persoon.voornaam;
    document.getElementById("telefoon").innerHTML = persoon.telefoonnummer;
    document.getElementById("mail").innerHTML = persoon.mailadres;
    document.getElementById("woonplaats").innerHTML = persoon.woonplaats;
}

persoonWeergeven(persoon);