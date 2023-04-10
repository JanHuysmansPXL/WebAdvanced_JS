let huidigeDatum = new Date();
let maanden = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"]

let huidigeMaand = huidigeDatum.getMonth();
let maandTekst = maanden[huidigeMaand];
console.log(huidigeMaand);

document.getElementById("uitkomst").innerText = maandTekst;



