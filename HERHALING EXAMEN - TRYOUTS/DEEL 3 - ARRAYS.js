// 3.2 - ARRAYS


//Een lege array.
let leeg = new Array();
console.log(leeg);

//Een lege array met 5 plaatsen.
let werkdagLeeg = new Array(5);
console.log(werkdagLeeg);

//Een lege array met plaats voor 5 elementen die erna gevuld wordt.

let werkdagen = new Array(5);
werkdagen[0] = "Maandag";
werkdagen[1] = "Dinsdag";
werkdagen[2] = "Woensdag";
werkdagen[3] = "Donderdag";
werkdagen[4] = "Vrijdag";

// OF

let werkdagen2 = new Array("Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag");

// OF

let werkdagen3 = ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag"];

console.log(werkdagen);
console.log(werkdagen2);
console.log(werkdagen3);

console.log(werkdagen[0]);

// ELEMENT UIT DE ARRAY OPSLAAN ALS VARIABELE

let maandag = werkdagen[0];
console.log(maandag);

// ELEMENTEN TOEVOEGEN OF VERVANGEN.

// werkdagen[5] = "Zaterdag";
// werkdagen[0] = "Zondag";
// werkdagen.length = 0;

// 2.3.1 JOIN EN SPLIT
console.log(werkdagen.join());
console.log(werkdagen.join(" - "));

let werkdagenString = "Maandag,Dinsdag,Woensdag,Donderdag,Vrijdag";
console.log(werkdagenString.split(","));

// 2.3.2 SORT

console.log(werkdagen.reverse());
werkdagen.sort();

// 2.3.2 REVERSE

werkdagen.reverse();
console.log(werkdagen);

// 2.3.4 PUSH EN UNSHIFT - TOEVOEGEN

let kleurenPush = ["Rood", "Geel", "Blauw"];
kleurenPush.push("Groen", "Wit", "Zwart");
console.log(kleurenPush);

let kleurenUnshift = ["Rood", "Geel", "Blauw"];
kleurenUnshift.unshift("Groen", "Wit", "Zwart");
console.log(kleurenUnshift);

// 2.3.5 POP EN SHIFT - VERWIJDEREN

let kleurenPop = ["Rood", "Geel", "Blauw"];
kleurenPop.pop();
console.log(kleurenPop);

let kleurenShift = ["Rood", "Geel", "Blauw"];
kleurenShift.shift();
console.log(kleurenShift);

// 2.3.6 CONCAT - ARRAYS SAMENVOEGEN

let werkdag = ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag"];
let weekenddag = ["Zaterdag", "Zondag"];
let dagen = werkdag.concat(weekenddag);
console.log(dagen);

