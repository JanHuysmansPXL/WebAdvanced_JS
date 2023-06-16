let geboortejaar = parseInt(prompt("Wat is je geboortejaar?", "1980"));
console.log(geboortejaar);

let huidigeDatum = new Date();
let huidigJaar = huidigeDatum.getFullYear();
let huidigeMaand = huidigeDatum.getMonth() + 1;
let huidigeDag = huidigeDatum.getDate();

console.log(huidigeDatum);
console.log(huidigJaar);
// console.log(huidigeMaand);
// console.log(huidigeDag);

let leeftijdBezoeker = huidigJaar - geboortejaar;
console.log(leeftijdBezoeker);

if (leeftijdBezoeker >= 20) {
    alert("Je bent oud genoeg om de webpagina te bekijken");
}
else {
    alert("Je bent " + leeftijdBezoeker + " jaar oud. Je moet 18 zijn. Nog even wachten..")
}

//UITBREIDING NOG UIT TE PROBEREN MET DE VOLLEDIGE DATUM.