// 1.1 -- IF ELSE

let leeftijd = 11;
if (leeftijd <= 12) {
    console.log("Je krijgt een Happy Meal.");
}
else {
    console.log("Je krijgt geen Happy Meal.");
}

// 1.1 -- IF ELSE MET MEERDERE VOORWAARDEN / CONDITIONS.

let spaargeld = 800;
let huidigeGsm = "Stuk";
if (spaargeld >= 750 && huidigeGsm === "Stuk") {
    console.log("Je mag een nieuwe gsm kopen.");
}
else {
    console.log("Nog even wachten...");
}

// 1.1 - ZONDER ELSE-STATEMENT OP HET EINDE MAG OOK.


let leeftijd2 = 19;
if (leeftijd2 >= 18) {
    console.log("Je krijgt het label +18.");
}

// 1.2 - SWITCH

let dag;
switch (new Date().getDay()) {
    case 0:
        dag = "zondag";
        break;
    case 1:
        dag = "maandag";
        break;
    case 2:
        dag = "dinsdag";
        break;
    case 3:
        dag = "woensdag";
        break;
    case 4:
        dag = "donderdag";
        break;
    case 5:
        dag = "vrijdag";
        break;
    case 6:
        dag = "zaterdag";
}
console.log("Vandaag zijn we " + dag + ".");

// SWITCH MET DEFAULT OPTIE

let koekje = prompt("Wil je een koekje", "Ja, Nee");
let uitkomst;

switch (koekje) {
    case "Ja":
        uitkomst = "Joepie, hier is je koekje!";
        break;
    case "Nee":
        uitkomst = "Oké, hap dan maar wat lucht!";
        break;
    default:
        uitkomst = "Sorry, dat was geen duidelijk antwoord...";
}
//document.getElementById("antwoord").innerHTML = uitkomst;
console.log(uitkomst);

// 1.3 WHILE

let teller = 1;
let uitkomst2 = "";

while (teller < 10) {
    uitkomst2 = uitkomst2 + "<br>De teller staat op " + teller + ".";
    teller++; }
console.log(uitkomst2);

// 1.4 DO WHILE - MINSTENS 1 KEER UITGEVOERD? OOK BIJ FALSE.

let teller2 = 15;
let uitkomst3 = "";

do {
    uitkomst3 = uitkomst3 + "<br>De teller staat op "+ teller2 +".";
    teller++;
}
while (teller2 < 10);
console.log(uitkomst3);

// 1.5 - FOR

let uitkomst4 = "";

for(teller3 = 0; teller3 < 10; teller3++) {
    uitkomst4 = uitkomst4 + "<br>De teller staat op " + teller3 + ".";
    console.log(uitkomst4);
}
