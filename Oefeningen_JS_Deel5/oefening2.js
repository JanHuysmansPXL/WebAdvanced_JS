document.getElementsByTagName("button")[0].addEventListener('click', tekstWeergeven);

function tekstWeergeven() {
    let nieuweP = document.createElement("p");
    let nieuwePTekst = document.createTextNode(document.getElementsByTagName("input")[0].value);
    nieuweP.appendChild(nieuwePTekst);
    document.getElementsByTagName("body")[0].appendChild(nieuweP);
}