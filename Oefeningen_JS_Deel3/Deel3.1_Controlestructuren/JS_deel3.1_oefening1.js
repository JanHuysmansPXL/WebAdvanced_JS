let geboortedatum = new Date(prompt("Wat is je geboortedatum, in formaat YYYY/MM/DD"));
const huidigeDatum = new Date();
let leeftijd;
let verschilMaand;
let verschilDag;

leeftijd = huidigeDatum.getFullYear() - geboortedatum.getFullYear();
verschilMaand = huidigeDatum.getMonth() - geboortedatum.getMonth();
verschilDag = huidigeDatum.getDate() - geboortedatum.getDate();

/*
    if (leeftijd > 20) {
        alert("Je bent oud genoeg om de informatie op deze webpagina te bekijken.");
    } else {
        alert("Pech gehad");
    }
*/

if (verschilMaand < 0)  {
    leeftijd--;
}
else if (verschilMaand === 0)  {
    if (verschilDag < 0) {
        leeftijd--;
    }
}

console.log(leeftijd);
console.log(geboortedatum);
console.log(huidigeDatum);


if (leeftijd >= 20) {
    alert("Je bent oud genoeg om de informatie op deze webpagina te bekijken.");
}
