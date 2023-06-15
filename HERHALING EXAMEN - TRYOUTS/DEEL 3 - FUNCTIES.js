// 3.3 FUNCTIES

// 3.3.1 FUNCTIE EXPRESSIE (als variabele)

let vierkant = function(lengte) {
    return lengte * lengte;
};
console.log(vierkant(5));

// 3.3.1 FUNCTIE DECLARATIE (als variabele)
// IS HOISTED - MEER OPTIES QUE POSITIONEREN.

console.log(kubus(5));
function kubus(lengte) {
    return lengte * lengte * lengte;
}

/*
3.2 OPBOUW VAN FUNCTIES

function functieNaam(parameter1, parameter2) {
// statements waarin we de parameters gebruiken
}
functieNaam();

*/

// 3.2 - ANONIEME FUNCTIE (IIFE (Immediately-Invoked Function Expression)

( function(bedrag) {
    console.log(bedrag * 1.21);
}(100));

// 3.2.2 - Parameters.

// Zonder Parameter:
function schrijfTest() {
    document.getElementById("uitkomst").innerHTML = "Test";
    console.log("Test");
}
schrijfTest();

// Met 2 Parameters:

function optellen(getal1, getal2) {
    return getal1 + getal2;
}
console.log(optellen(12, 15));
console.log(optellen(1, 2));

// Naam declareren als variabele in een functie gebruiken.

let volledigeNaam = "Kimberly Willems";

function weergevenNaam(naam) {
    console.log("Uw naam is " + naam + ".");
}
weergevenNaam(volledigeNaam)

// 3.3 - RETURN

function kwadraat(getal) {
    return getal * getal;
}
console.log(kwadraat(5));

function kwadraat2(getal) {
    return getal * getal;
}

let uitkomst = kwadraat2(5);
console.log(uitkomst);


/* TEST

for (teller = 0; teller <= 9; teller++) {
    console.log(kwadraat(teller));
}

 */




