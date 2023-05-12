let knop = document.getElementById('knop');

knop.addEventListener('click', welkom);

function welkom() {
    inhoud = document.getElementById('tekstvak').value;
    document.getElementById('boodschap').innerHTML = inhoud;
}