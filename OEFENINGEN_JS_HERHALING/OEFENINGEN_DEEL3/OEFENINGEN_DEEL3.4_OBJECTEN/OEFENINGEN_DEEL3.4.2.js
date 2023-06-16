let persoon = {
    naam: "Huysmans",
    voornaam: "Jan",
    telefoonnummer: "0472752284",
    geboortedatum: "16/09/1992",
    mailadres: "jan_huysmans@outlook.com",
    persoon_intro: function() {
        return "Hallo ik ben " + this.voornaam + " " + this.naam + "." + "<br>" + "Mijn telefoonnummer is " + this.telefoonnummer + " en mijn mailadres is " + this.mailadres + "." + "<br>" + "Via deze gegevens kan je mij altijd contacteren.";
    }
}

persoon.persoon_intro;

console.log(persoon);

document.getElementById("naam").innerHTML = persoon.naam;
document.getElementById("voornaam").innerHTML = persoon.voornaam;
document.getElementById("telefoon").innerHTML = persoon.telefoonnummer;
document.getElementById("geboortedatum").innerHTML = persoon.geboortedatum;
document.getElementById("mailadres").innerHTML = persoon.mailadres;
document.getElementById("intro").innerHTML = persoon.persoon_intro();

