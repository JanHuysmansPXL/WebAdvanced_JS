// 1.7 Oefening
// Schrijf de functie ‘alleWoordenStartenMetHoofdletter()’.
// Gebruik de zin ‘Deze oefeningen zijn héél leuk.’
// en pas deze zo aan dat ieder woord start met een hoofdletter.

//  Tips / stappenplan:
// • Splits de zin op per woord met behulp van een array.
// • Maak een loop die loopt op basis van de lengte van de array.
// • Zorg in de loop dat ieder woord start met een hoofdletter.
// De output wordt getoond op de webpagina.
let startZin = "Deze oefeningen zijn héél leuk."
console.log(startZin);
let nieuweZin = "";

function alleWoordenStartenMetHoofdletter(zin) {

   let zinArray = zin.split(" ");
   console.log(zinArray);

   for (woord in zin) {
      //huidig woord selecteren uit de array met index (Woord) zie for loop.
      let huidigWoord = zinArray[woord];
      console.log(huidigWoord)
      // Eerste letter selecteren en groot zetten.
      let eersteLetterGroot = huidigWoord.charAt(0).toUpperCase();
      console.log(eersteLetterGroot);
      // De rest van het woord er terug aan plakken met Substring vanaf 1...
      let nieuwWoord = eersteLetterGroot + zinArray[woord].substring(1);
      console.log(nieuwWoord);
      nieuweZin = nieuweZin + nieuwWoord;
      return nieuweZin;
   }
}

alleWoordenStartenMetHoofdletter(startZin);


//  function alleWoordenStartenMetHoofdletter(zin) {}
//alleWoordenStartenMetHoofdletter(startZin);