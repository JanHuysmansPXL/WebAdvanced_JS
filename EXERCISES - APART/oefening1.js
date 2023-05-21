
// OK.

// Maak een script dat
// de tekst die de bezoeker invult in het tekstvak weergeeft in de lege paragraaf,
// na het klikken op de knop ‘Tonen'.
// Als de gebruiker meermaals op de knop klikt,
// dan wordt de tekst in de lege paragraaf vernieuwd.

let knop = document.getElementById('knop');
knop.addEventListener('click', welkom);

function welkom() {
    input = document.getElementById('tekstvak').value;
    document.getElementById('bericht').innerHTML = input;
}