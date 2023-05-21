document.getElementsByTagName("td")[0].addEventListener('click', cijferEen);
document.getElementsByTagName("td")[1].addEventListener('click', cijferTwee);
document.getElementsByTagName("td")[2].addEventListener('click', cijferDrie);
document.getElementsByTagName("td")[3].addEventListener('click', cijferVier);
document.getElementsByTagName("td")[4].addEventListener('click', cijferVijf);
document.getElementsByTagName("td")[5].addEventListener('click', cijferZes);

function cijferEen() {
    document.getElementsByTagName("td")[0].innerHTML = "Be yourself";
}
function cijferTwee() {
    document.getElementsByTagName("td")[1].innerHTML = "Two things";
}
function cijferDrie() {
    document.getElementsByTagName("td")[2].innerHTML = "So many";
}
function cijferVier() {
    document.getElementsByTagName("td")[3].innerHTML = "A room";
}
function cijferVijf() {
    document.getElementsByTagName("td")[4].innerHTML = "You only";
}
function cijferZes() {
    document.getElementsByTagName("td")[5].innerHTML = "Be the change";
}