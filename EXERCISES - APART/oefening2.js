// OK !!

let knop = document.getElementById('knop');
let main = document.getElementsByTagName('main')[0];

knop.addEventListener('click', welkom);

function welkom() {
    input = document.getElementById('tekstvak').value
    let nieuweParagraaf = document.createElement('p');
    inhoudParagraaf = document.createTextNode(input);
    nieuweParagraaf.appendChild(inhoudParagraaf);
    main.appendChild(nieuweParagraaf);
  console.log(nieuweParagraaf);
  console.log(inhoudParagraaf);
  console.log(input);
}

