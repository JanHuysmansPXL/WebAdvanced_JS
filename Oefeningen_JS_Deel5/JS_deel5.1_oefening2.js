let knop = document.getElementById("knop");
let doos = document.getElementById("doos");
let inhoud;

knop.addEventListener("click", toonTekst);

function toonTekst() {

    inhoud = document.getElementById('tekstvak').value;

    let nieuweParagraaf = document.createElement("p");
    nieuweParagraaf.id = "nieuw";

    let tekstNieuweParagraaf = document.createTextNode(inhoud);
    nieuweParagraaf.appendChild(tekstNieuweParagraaf);
    doos.appendChild(nieuweParagraaf);
}

console.log(inhoud);