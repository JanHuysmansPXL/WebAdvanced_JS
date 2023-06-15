// DEEL 4 - DOM

// BENADEREN VIA ID
/*
// ALS OBJECT TERUGGEVEN
let object = document.getElementById("demo");
console.log(object);

// ALS NULL TERUGGEVEN
let object2 = document.getElementById("test");
console.log(object2);

// BENADEREN VIA TAG-NAAM

let paragrafenByTagname = document.getElementsByTagName("p");
console.log(paragrafenByTagname);

let eersteParagraaf = document.getElementsByTagName("p")[0];
console.log(eersteParagraaf);

let tweedeParagraaf = document.getElementsByTagName("p")[1];
console.log(tweedeParagraaf);

// BENADEREN VIA TAG-NAAM "P" IN ELEMENT MET ID "TEKST"
let x = document.getElementById("tekst");
let y = x.getElementsByTagName("p")[1];

console.log(x);
console.log(y);

// BENADEREN VIA CLASS-NAAM

let objectenDemo = document.getElementsByClassName("demo");
console.log(objectenDemo);

let elementByClass = document.getElementsByClassName("test");
console.log(elementByClass);

// BENADEREN VIA NAAM (NAME)

let volledigeNaam = document.getElementsByName("volledigenaam");
console.log(volledigeNaam);

let volledigeNaamNull = document.getElementsByName("test");
console.log(volledigeNaamNull);
*/
// BENADEREN VIA CSS SELECTOR

let objectQueryselector = document.querySelectorAll("p.demo");
console.log(objectQueryselector);

let objectenQueryselector = document.querySelectorAll(".demo");
console.log(objectenQueryselector);

//