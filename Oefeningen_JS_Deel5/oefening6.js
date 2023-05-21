let teller = 0;

document.getElementsByTagName("button")[0].addEventListener('click', boodschapToevoegen);

function boodschapToevoegen() {
    teller++;

    // Maak het lijstitem met de boodschap en voeg deze toe aan de ongeordende lijst
    let boodschap = document.getElementsByTagName("input")[0].value;
    let lijstitem = document.createElement("li");
    lijstitem.id = "boodschap" + teller;
    let lijstitemTekst = document.createTextNode(boodschap + " - ");
    lijstitem.appendChild(lijstitemTekst);
    document.getElementsByTagName("ul")[0].appendChild(lijstitem);

    // Maak de verwijderknop en voeg deze toe aan het lijstitem
    let verwijderKnop = document.createElement("a");
    verwijderKnop.href = "#";
    let verwijderKnopTekst = document.createTextNode("Verwijder");
    verwijderKnop.appendChild(verwijderKnopTekst);
    document.getElementById("boodschap" + teller).appendChild(verwijderKnop);
}