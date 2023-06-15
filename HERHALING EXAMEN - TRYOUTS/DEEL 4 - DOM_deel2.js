
let nieuweParagraaf = document.createElement("p");

nieuweParagraaf.id = "test";

let tekstParagraaf = document.createTextNode("Dit is een stukje tekst");

nieuweParagraaf.appendChild(tekstParagraaf);

//document.getElementById("startheader").appendChild(nieuweParagraaf);

document.getElementById("startheader").insertBefore(nieuweParagraaf, document.getElementById("titel"));