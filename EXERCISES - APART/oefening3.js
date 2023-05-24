// NIET AF

let knop = document.getElementById('knop');
let knop2 = document.getElementById('knop2');
let main = document.getElementsByTagName('main')[0];

knop.addEventListener('click', tekstVullen);
knop2.addEventListener('click', tekstWissen);




function tekstVullen() {
    input = document.getElementById('tekstvak').value
    let nieuweParagraaf = document.createElement('p');
    let nieuweSpan = document.createElement('span');
    inhoudSpan = document.createTextNode(input);
    nieuweParagraaf.appendChild(nieuweSpan);
    nieuweSpan.appendChild(inhoudSpan)
    main.appendChild(nieuweParagraaf);
}

function tekstWissen() {
    document.getElementsByTagName('p').innerHTML = "";
}