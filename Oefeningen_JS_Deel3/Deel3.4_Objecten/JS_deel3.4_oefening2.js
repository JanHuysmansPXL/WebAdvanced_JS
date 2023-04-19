let persoon = {
    naam: 'Huysmans',
    voornaam: 'Jan',
    geboortedatum: '16-09-1992',
    mailadres: 'jan_huysmans@outlook.com',
    woonplaats: 'Antwerpen',
    zin: function () {
        return "Mijn naam is " + this.naam + " " + this.voornaam + " en ik ben geboren op " +
            this.geboortedatum + ". Mijn telefoonnummer is "  + this.telefoonnummer + "en mijn mailadres is " + this.mailadres + ".";
    }
}

    document.getElementById("naam").innerHTML = persoon.naam;
    document.getElementById("voornaam").innerHTML = persoon.voornaam;
    document.getElementById("geboortedatum").innerHTML = persoon.geboortedatum;
    document.getElementById("mail").innerHTML = persoon.mailadres;
    document.getElementById("woonplaats").innerHTML = persoon.woonplaats;

persoonWeergeven(persoon);

document.getElementById("uitkomst").innerText = persoon.zin();