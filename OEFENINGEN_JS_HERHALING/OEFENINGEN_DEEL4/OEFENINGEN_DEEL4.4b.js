//Maak daarna een script.
// OK - Plaats in het script een array waarin twee objecten staan met volgende eigenschappen:...
// Zorg er via het script voor dat de twee objecten (met hun bijhorende eigenschappen)
// worden weergegeven op de webpagina als list-item van de ongeordende lijst.

let boek1 = {
    titel: "The theory of everything",
    auteur: "Stephen Hawking",
    gelezen: "Ja"
}
let boek2 = {
    titel: "12 rules for life",
    auteur: "Jordan Peterson",
    gelezen: "Nee"
}
let boek3 = {
    titel: "Piranesi",
    auteur: "Suzanna Clarke",
    gelezen: "Ja"
}

let boeken = [boek1, boek2]

console.log(boek1);
console.log(boek2);
console.log(boeken);

// • Voeg een aside toe in de main met de adresgegevens van Hogeschool PXL.

let lijst = document.getElementById("lijst");
console.log(lijst);

let omschrijving = "";
let teller = 0;
let listitem = []

// • FUNCTIE OM DE INFO UIT HET BOEK-OBJECT OM TE ZETTEN NAAR LIST-ITEMS MET TEKST.

function boekUitlezen(boek) {
    for (eigenschap in boek) {
        omschrijving = eigenschap + " : " + boek[eigenschap];
        console.log(omschrijving);
        listitem[teller] = omschrijving;
        let nieuwListitem = document.createElement("li");
        let tekstListitem = document.createTextNode(listitem[teller]);
        lijst.appendChild(nieuwListitem);
        nieuwListitem.appendChild(tekstListitem);
        teller++;
    }
}

boekUitlezen(boek1);
boekUitlezen(boek1);
boekUitlezen(boek1);
boekUitlezen(boek1);
boekUitlezen(boek1);
boekUitlezen(boek1);
boekUitlezen(boek1);
boekUitlezen(boek1);
boekUitlezen(boek1);
boekUitlezen(boek1);
boekUitlezen(boek1);
boekUitlezen(boek1);
boekUitlezen(boek1);
boekUitlezen(boek1);
boekUitlezen(boek1);
boekUitlezen(boek1);
boekUitlezen(boek1);
boekUitlezen(boek1);
boekUitlezen(boek1);
boekUitlezen(boek1);
boekUitlezen(boek2);
boekUitlezen(boek3);

console.log(listitem);
