// Schrijf een programma dat alle dagen van de huidige maand toont in datumnotatie ‘dd/mm/yyyy’.
// Maak hiervoor een array aan met het aantal dagen per maand voor alle maanden.
// Gebruik daarna een lus om alle dagen van de maand af te lopen.

let maanden = new Array(12)
maanden[0] = "Januari";
maanden[2] = "Februari";
maanden[3] = "Maart";
maanden[4] = "April";
maanden[5] = "Mei";
maanden[6] = "Juni";
maanden[7] = "Juli";
maanden[8] = "Augustus";
maanden[9] = "September";
maanden[10] = "Oktober";
maanden[11] = "November";
maanden[11] = "December";

let aantalDagenPerMaand = [31,28,31,30,31,30,31,30,31,30,31,30]
let uitkomst = "";

console.log(maanden);
console.log(aantalDagenPerMaand);

let huidigeDatum = new Date();
let huidigeMaand = huidigeDatum.getMonth() + 1;
let huidigJaar = huidigeDatum.getFullYear();
let huidigeDag = huidigeDatum.getDay();

console.log(huidigeMaand);
console.log(huidigJaar);
console.log(huidigeDag);
console.log(aantalDagenPerMaand[huidigeMaand]);

// PER DAG VAN DE MAAND AFPRINTEN - DE DAG / DE MAAND / HET JAAR (PER DAG VAN DE MAAND HERHALEN)

for (let dagen = 1; dagen <= aantalDagenPerMaand[huidigeMaand]; dagen++) {
    if (dagen < 10) {
        uitkomst = uitkomst + 0 + dagen + "/" + huidigeMaand + "/" + huidigJaar + "<br>";
        document.getElementById("datums").innerHTML = uitkomst;
    }
    else {
        uitkomst = uitkomst + dagen + "/" + huidigeMaand + "/" + huidigJaar + "<br>";
        document.getElementById("datums").innerHTML = uitkomst;
        console.log(uitkomst);
    }
}
