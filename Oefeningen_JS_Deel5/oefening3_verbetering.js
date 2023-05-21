let teller = 0;

document.getElementsByTagName('button')[0].addEventListener("click", tekstTonen);
document.getElementsByTagName('button')[1].addEventListener("click", tekstWissen);

function tekstTonen() {
    teller++;
//SPAN AANMAKEN MET TEKST UIT INPUTVELD EN OP WEBPAGINA PLAATSEN MET ID.

    let span = document.createElement('span');
    let spanTekst = document.createTextNode(document.getElementsByTagName('input')[0].value + " ");
    span.appendChild(spanTekst);
    document.getElementsByTagName('p')[0].appendChild(span);
    span.id = 'span' + teller;

    // LAATSTE SPAN ROOD MAKEN EN LETTERDIKTE WIJZIGEN
    document.getElementById('span' + teller).style.color = "red";
    document.getElementById('span' + teller).style.fontWeight = "bold";

    // ALS ER MEERDERE SPANS ZIJN IS ER ALTIJD ENE VOORLAATSTE SPAN
    // DE VOORLAATSTE SPAN MAKEN WE TERUG ZWART

    if (teller !== 1) {
        document.getElementById('span' + (teller - 1)).style.color = 'black';
        document.getElementById('span' + (teller - 1)).style.fontWeight = 'bold';
    }
}

function tekstWissen() {
        teller = 0;
        document.getElementsByTagName('p').innerHTML = "";
}
