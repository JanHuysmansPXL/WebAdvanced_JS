let dagenPerMaand = [31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30];
let maanden = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"];
let dagnaam = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"]
let huidigeDatum = new Date();
let huidigeMaand = huidigeDatum.getMonth();
let huidigJaar = huidigeDatum.getFullYear();
let uitkomst = " ";


for (let dagen = 1; dagen <= dagenPerMaand[huidigeMaand]; dagen++) {
    if (dagen < 10) {
        dagen = "0" + dagen;
    }
    uitkomst = uitkomst + dagen + "/" + maanden[huidigeMaand] + "/" + huidigJaar + "<br>";
}

document.getElementById('uitkomst').innerHTML = (uitkomst);

