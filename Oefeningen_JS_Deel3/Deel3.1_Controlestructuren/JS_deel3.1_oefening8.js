let huidigeDatum = new Date();
let huidigUur = huidigeDatum.getHours();
let huidigeMinuten = huidigeDatum.getMinutes();
let dagdeel;

console.log(huidigUur);
console.log(huidigeMinuten);

/*
if (huidigUur >= 7 && huidigUur < 12) {
    dagdeel = "voormiddag";
    document.getElementById('uitkomst').innerText = "Goeiemorgen Jan, het is " + huidigUur + " uur en " + huidigeMinuten + " minuten in de " + dagdeel + ".";
}
else if (huidigUur >= 12 && huidigUur < 18) {
    dagdeel = "namiddag";
    document.getElementById('uitkomst').innerText = "Goeiemiddag Jan, het is " + huidigUur + " uur en " + huidigeMinuten + " minuten in de " + dagdeel + ".";
}
else {
    dagdeel = "avond";
    document.getElementById('uitkomst').innerText = "Goeie avond Jan, het is " + huidigUur + " uur en " + huidigeMinuten + " minuten in de " + dagdeel + ".";
}
*/

switch (huidigUur) {
    case (huidigUur >= 7 && huidigUur < 12):
        dagdeel = "voormiddag";
        document.getElementById('uitkomst').innerText = "Goeiemorgen Jan, het is " + huidigUur + " uur en " + huidigeMinuten + " minuten in de " + dagdeel + ".";
        break;
    case (huidigUur >= 12 && huidigUur < 18):
        dagdeel = "namiddag";
        document.getElementById('uitkomst').innerText = "Goeiemiddag Jan, het is " + huidigUur + " uur en " + huidigeMinuten + " minuten in de " + dagdeel + ".";
        break;
    default:
        dagdeel = "avond";
        document.getElementById('uitkomst').innerText = "Goeie avond Jan, het is " + huidigUur + " uur en " + huidigeMinuten + " minuten in de " + dagdeel + ".";
}