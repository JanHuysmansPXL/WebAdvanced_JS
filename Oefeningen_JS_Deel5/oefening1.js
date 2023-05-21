document.getElementsByTagName("button")[0].addEventListener('click', tekstWeergeven);

function tekstWeergeven() {
    let tekst = document.getElementsByTagName("input")[0].value;
    document.getElementsByTagName("p")[0].innerHTML = tekst;
}