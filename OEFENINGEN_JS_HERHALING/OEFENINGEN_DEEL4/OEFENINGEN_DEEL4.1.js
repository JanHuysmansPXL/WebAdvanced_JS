function elementenOphalen() {

// OK • Alle HTML-elementen met de class ‘randomtekst’.
    let randomTekst = document.getElementsByClassName("randomtekst");
    let randomTekstLengte = randomTekst.length;
    console.log(randomTekst);
    console.log(randomTekstLengte);

    for (let i = 0; i <= (randomTekstLengte - 1); i++) {
        randomTekst[i].style.color = "red"
    }

// OK • Alle afbeeldingen.
    let afbeeldingen = document.getElementsByTagName(".img");
    console.log(afbeeldingen);

// OK • Alle paragrafen met de class ‘specialetekst’.
    let specialeTekst = document.getElementsByClassName("specialetekst");
    let specialeTekstLengte = specialeTekst.length;


for (let i = 0; i <= (specialeTekstLengte - 1); i++) {
    specialeTekst[i].style.color = "green"
    specialeTekst[i].style.textDecoration = "underline"
}

// • De vijfde paragraaf op de webpagina.
let vijfdeParagraaf = document.getElementsByTagName("p")[4];
console.log(vijfdeParagraaf);
vijfdeParagraaf.style.color = "blue"


// • De tweede paragraaf met de class ‘randomtekst’.
let tweedeParagraafRandom = document.getElementsByClassName("randomtekst")[1];
console.log(tweedeParagraafRandom);
tweedeParagraafRandom.style.fontWeight = "bold";
}

elementenOphalen();