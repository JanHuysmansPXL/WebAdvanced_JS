//Pas het programma uit oefening 2 aan.
// Zorg ervoor dat bij alle andere antwoorden
// de zin ‘Dat was niet duidelijk, antwoord je vanuit je luie zetel?’
// wordt weergegeven.
// Gebruik voor deze oefening een ‘switch’ controlestructuur.

let antwoordBezoeker = prompt("Ga je graag sporten?","JA/NEE").toUpperCase();

console.log(antwoordBezoeker);

/*
if (antwoordBezoeker === "JA") {
    document.getElementById("respons").innerHTML = "Just Do It !";
}
else if (antwoordBezoeker === "NEE" ){
    document.getElementById("respons").innerHTML = "Jammer, blijf dan maar liggen.";
}
else {
    document.getElementById("respons").innerHTML = "Helaas, je input was niet correct, geef JA of NEE in a.u.b.";
}
*/

// ALTERNATIEF MET SWITCH STRUCTUUR

switch (antwoordBezoeker) {
    case "JA":
        document.getElementById("respons").innerHTML = "Just Do It !";
        break;
    case "NEE":
        document.getElementById("respons").innerHTML = "Jammer, blijf dan maar liggen.";
        break;
    default:
        document.getElementById("respons").innerHTML = "Helaas, je input was niet correct, geef JA of NEE in a.u.b."
}