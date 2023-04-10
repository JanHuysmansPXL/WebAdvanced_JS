let huidigeDatum = new Date();
let huidigUur = huidigeDatum.getHours();
let huidigeMinuten = huidigeDatum.getMinutes();
let dagdeel;

console.log(huidigUur);
console.log(huidigeMinuten);

if (huidigUur < 12) {
    dagdeel = "voormiddag";
    document.getElementById('uitkomst').innerText = "Het is " + huidigUur + " uur en " + huidigeMinuten + " minuten in de " + dagdeel + ".";
}
else {
    dagdeel = "namiddag";
    document.getElementById('uitkomst').innerText = "Het is " + huidigUur + " uur en " + huidigeMinuten + " minuten in de " + dagdeel + ".";
}

