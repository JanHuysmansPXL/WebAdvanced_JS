//Pas het programma uit oefening 4 aan.
// Toon de dag en één van onderstaande dagdelen
// met behulp van een welkomszin op de webpagina.
// Gebruik voor deze oefening een ‘switch’
// EN ‘if-else’ controlestructuur.

let weekdagen = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
let maanden = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "Oktober", "November", "December"];

let datum = new Date;

let huidigeDagIndex = datum.getDay();
let huidigeDagNaam = weekdagen[huidigeDagIndex].toLowerCase();
let huidigeDag = datum.getDate();

let huidigeMaand = datum.getMonth() + 1;
let huidigeMaandNaam = maanden[huidigeMaand];

let huidigJaar = datum.getFullYear();
let huidigUur = datum.getHours();

let dagdeel;

console.log(datum);
console.log(weekdagen);
console.log(huidigeDagNaam);
console.log(huidigeDagIndex);
console.log(huidigeDag);
console.log(huidigeMaand);
console.log(huidigJaar);
console.log(huidigUur);

/* IF / ELSE STRUCTUUR.

if (huidigUur >= 7 && huidigUur < 12) {
    dagdeel = "Goedemorgen";
}
else if (huidigUur >= 12 && huidigUur < 18) {
    dagdeel = "Goede dag";
}
else {
    dagdeel = "Goede avond";
}

einde. */


// SWITCH STRUCTUUR
// TRUE ALS WAARDE AANGEBRACHT OM TE 'VERGELIJKEN' MET DE UITKOMST VAN DE CASES.(huidiguur < 7 && ---- etc..).

switch (true) {
    case (huidigUur >= 7 && huidigUur < 12):
        dagdeel = "Goedemorgen";
        document.getElementById("respons").innerHTML = dagdeel + ", het is vandaag " + huidigeDagNaam + " " + huidigeDag + " " + huidigeMaandNaam + " " + huidigJaar+ ".";
        break;
    case (huidigUur >= 12 && huidigUur < 18):
        dagdeel = "Goedemiddag";
        document.getElementById("respons").innerHTML = dagdeel + ", het is vandaag " + huidigeDagNaam + " " + huidigeDag + " " + huidigeMaandNaam + " " + huidigJaar+ ".";
        break;
    default:
        dagdeel = "Goede avond";
        document.getElementById("respons").innerHTML = dagdeel + ", het is vandaag " + huidigeDagNaam + " " + huidigeDag + " " + huidigeMaandNaam + " " + huidigJaar+ ".";
}
console.log(huidigUur);
console.log((huidigUur >= 7 && huidigUur < 12));
console.log((huidigUur >= 12 && huidigUur < 18));
console.log(dagdeel);


