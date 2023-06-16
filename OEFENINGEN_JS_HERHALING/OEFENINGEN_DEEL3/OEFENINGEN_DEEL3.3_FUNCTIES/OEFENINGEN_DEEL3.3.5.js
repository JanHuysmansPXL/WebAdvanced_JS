//Schrijf een functie zinSplitsen().
// Vraag aan de bezoeker van de webpagina een random zin
// en vraag daarna een random getal tot het maximaal aantal tekens van de opgegeven zin.
//  Splits de zin op in twee stukken op basis van het opgegeven random getal.
//  Het random opgegeven getal is het overeenstemmende teken waarop we de zin gaan splitsen.
//  Indien de gebruiker een andere waarde dan toegestaan ingeeft als ‘random getal’,
//  moet je een foutmelding geven.
//  De output wordt getoond in een alert-venster.


let randomZin = prompt("Geef een random zin in: ");
let maxAantalTekens = prompt("geef het mamimum aantal tekens in: ");
let beginZin;
let eindeZin;

function zinSplitsen(inputZin, tekens) {
   if (typeof tekens == 'number') {

   beginZin = inputZin.substring(0, tekens);
   eindeZin = inputZin.substring(tekens);
   document.getElementById('respons').innerHTML = beginZin;
   document.getElementById('respons2').innerHTML = eindeZin;
   }
   else {
      alert("OI FOUT !!")
   }
}

zinSplitsen(randomZin, maxAantalTekens);