//Schrijf een programma dat aan de bezoeker van de webpagina vraagt of ze graag sporten.
// Toon op basis van het antwoord de zinnen ‘Just do it!’ of ‘Jammer, blijf dan maar liggen’ op de webpagina.
// Maak deze oefening met een ‘if – else’ controlestructuur.

let antwoordBezoeker = prompt("Ga je graag sporten?","JA/NEE").toUpperCase();

console.log(antwoordBezoeker);

if (antwoordBezoeker === "JA") {
    document.getElementById("respons").innerHTML = "Just Do It !";
}
else if (antwoordBezoeker === "NEE" ){
    document.getElementById("respons").innerHTML = "Jammer, blijf dan maar liggen.";
}
else {
    document.getElementById("respons").innerHTML = "Helaas, je input was niet correct, geef JA of NEE in a.u.b.";
}