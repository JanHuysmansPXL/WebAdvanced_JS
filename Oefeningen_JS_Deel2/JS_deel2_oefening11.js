// DEEL 1 - TOEWIJZING

let waarde1 = 5;
let waarde2 = 8;

document.getElementById('toewijzing1').innerText = waarde1;
document.getElementById('toewijzing2').innerText = waarde2;

// DEEL 2 - WISKUNDIGE OPERATOREN

let som = waarde1 + waarde2;
let verschil = waarde1 - waarde2;
let product = waarde1 * waarde2;
let quotient = waarde1 / waarde2;
let modulus = waarde1 % waarde2;
let incrementPlus = waarde1++;
let incrementMinus = waarde1--;

document.getElementById('wisk1').innerText = som;
document.getElementById('wisk2').innerText = verschil;
document.getElementById('wisk3').innerText = product;
document.getElementById('wisk4').innerText = quotient;
document.getElementById('wisk5').innerText = modulus;
document.getElementById('wisk6').innerText = incrementPlus;
document.getElementById('wisk7').innerText = incrementMinus;

// DEEL 3 - CONCATENATIE - Strings Optellen.

let zin1 = 'Begin van'
let zin2 = 'het Einde'
let uitkomst = zin1 + " " + zin2;

document.getElementById('concatenatie').innerText = uitkomst;