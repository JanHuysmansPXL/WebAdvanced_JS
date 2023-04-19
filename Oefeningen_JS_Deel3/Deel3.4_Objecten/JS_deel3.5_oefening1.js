let klanten = [
    {voornaam: 'Jasper', naam: 'Beuls', stad: 'Hasselt'},
    {voornaam: 'Fons', naam: 'Depreter', stad: 'Genk'},
    {voornaam: 'Kimberly', naam: 'Schreurs', stad: 'Beverst'},
    {voornaam: 'Wannes', naam: 'Willems', stad: 'Hasselt'},
    {voornaam: 'Wouter', naam: 'Degendt', stad: 'Antwerpen'},
]

// functie OEF 1
/*

function wonendeTeGenk() {
    let wonenGenkArray = [];
    for (let teller = 0; teller < klanten.length; teller++) {
        if (klanten[teller].stad === 'Genk') {
            wonenGenkArray.push(klanten[teller]);
        }
    }
    console.log(wonenGenkArray);
}
wonendeTeGenk();
*/

// FUNCTIE OEF 2
/*
function lettersOptellen() {
    let aantal = 0;
    for (let teller = 0; teller < klanten.length; teller++) {
        aantal = aantal + klanten[teller].naam.length;
    }
    console.log(aantal);
}
lettersOptellen();
*/

// FUNCTIE 3 - OEF 3
/*
function stadAntwerpen() {
    nieuweStad = 'Antwerpen';
    for (let teller = 0; teller < klanten.length; teller++) {
        klanten[teller].stad = nieuweStad;
        nieuweStad = nieuweStad + '-Antwerpen';
    }
    console.log(klanten);
}
stadAntwerpen();
*/

// FUNCTIE 4 - OEF 4
// !!! RESTWAARDE-DELING 2 % KOMT ZEKER IN HET EXAMEN !!!
/*
function voornamenTellen() {
    let voornamen = "";
    for (teller = 0; teller < klanten.length; teller++) {
        voornamen = voornamen + klanten[teller].voornaam;
    }
    if (voornamen.length % 2 === 0) {
        let aantalTekensAlleVoornamen = voornamen.length;
        let aantalTekensLaatsteVoornaam = klanten[klanten.length-1].voornaam.length;
        let uitkomstMetHoofdletters = voornamen.substring(0, aantalTekensAlleVoornamen - aantalTekensLaatsteVoornaam) +
            voornamen.substring(aantalTekensAlleVoornamen-aantalTekensLaatsteVoornaam, aantalTekensAlleVoornamen).toUpperCase();
        console.log(uitkomstMetHoofdletters);
    }
    else {
        console.log(voornamen);
    }

}
voornamenTellen();
*/

// FUNCTIE 5 - OEF 5

function paragrafenMaken() {
    let uitkomst = "";
    for (let teller = 0; teller < klanten.length; teller++) {
        uitkomst += "<p>" + klanten[teller].naam + " " + klanten[teller].voornaam + ", wonende te " + klanten[teller].stad + ".</p>";
    }
    document.getElementById("uitkomst").innerHTML = uitkomst;
}
paragrafenMaken();