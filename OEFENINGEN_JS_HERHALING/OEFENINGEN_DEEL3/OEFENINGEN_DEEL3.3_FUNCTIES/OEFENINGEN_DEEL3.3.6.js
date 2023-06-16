//Pas de functie uit de vorige oefening aan
// en schrijf een functie ‘verwijderTeken()’.
// Vraag aan de bezoeker van de webpagina een random zin

// Vraag daarna een random getal tot het maximaal aantal tekens van de opgegeven zin.
// Splits de zin op in twee stukken op basis van het opgegeven random getal.
// Het random opgegeven getal is het overeenstemmende teken waarop we de zin gaan splitsen.
// Dit karakter gaan we ook mee verwijderen.

// Indien de gebruiker een andere waarde dat toegestaan ingeeft als ‘random getal’,
// moet je een foutmelding geven.

// De output wordt getoond in de console.

let randomZin = prompt("Geef een random zin in: ");
let maxAantalTekens = prompt("geef het maximum aantal tekens in: ");
let lengteZin = randomZin.length;
let verwijderdeLetter;
let beginZin;
let eindeZin;

function verwijderTeken(inputZin, aantalTekens) {
   if (aantalTekens < lengteZin) {
   beginZin = inputZin.substring(0, (aantalTekens-1));
   eindeZin = inputZin.substring(aantalTekens-1);
   verwijderdeLetter = inputZin.substring((aantalTekens-1), aantalTekens);
   document.getElementById('respons').innerHTML = beginZin;
   document.getElementById('respons2').innerHTML = eindeZin;
   document.getElementById("respons3").innerHTML = "De letter die werd verwijderd is: " + verwijderdeLetter;
   }
   else {
      alert("OI FOUT !! TE VEEL TEKENS !")
   }
}

verwijderTeken(randomZin, maxAantalTekens);