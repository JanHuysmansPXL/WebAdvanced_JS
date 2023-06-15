//OBJECTEN
// OBJECTEN DECLAREREN.

let persoon = {
    voornaam: "Kimberly",
    achternaam: "Willems",
    beroep: "lector"
};
console.log(persoon);

document.getElementById('uitkomst').innerHTML = "Mijn naam is " + persoon.voornaam + " " + persoon.achternaam + " en ik ben " + persoon.beroep + " van beroep.";

/*
document.getElementById("uitkomst").innerHTML
    = "Mijn naam is " + persoon["voornaam"] + " "
    + persoon["achternaam"] + " en ik ben "
    + persoon["beroep"] + " van beroep.";
*/

// FOR IN LOOP

let persoon2 = {voornaam:"Jasper", naam:"Beuls", mailadres:"jb@pxl.be"};
let uitkomst = "";
let eigenschap;

for (eigenschap in persoon2) {
    uitkomst = uitkomst + persoon2[eigenschap] + " ";
}

document.getElementById("demo").innerHTML = uitkomst;

// EIGENSCHAPPEN TOEVOEGEN.

persoon2.nationaliteit = "belg";
console.log(persoon2);

// EIGENSCHAPPEN VERWIJDEREN - DELETE.

delete persoon2.nationaliteit;
console.log(persoon2);

delete persoon.mailadres;

// OBJECTMETHODES

let game = {
    titel: "Assassin’s Creed Valhalla",
    editie: "Drakkar Edition",
   // prijs: getGamePrice("3307216169116"),
    volledige_titel: function() {
    return this.titel + " - " + this.editie;
    }
};

console.log(game);
console.log(game.volledige_titel());

let persoon3 = {
    voornaam:"Jasper",
    naam:"Beuls",
    mailadres:"jb@pxl.be"
};

let persoon3Array = Object.values(persoon3);

console.log(persoon3Array);