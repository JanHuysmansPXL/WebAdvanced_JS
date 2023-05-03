//inhoud tekst aanpassen
document.getElementsByTagName("a")[0].innerHTML = "Link naar Hogeschool PXL";
// bestaand attribuut aanpassen
document.getElementsByTagName("a")[0].href = "http://www.pxl.be";
// nieuwe attribuut toevoegen
document.getElementsByTagName("a")[0].target = "_blank";
//opmaak toevoegen
document.getElementsByTagName("a")[0].style.color = "#f00";

let paragraaf = document.createElement("p");
let paragraafTekst = document.createTextNode("Dit is een stukje tekst voor in de paragraaf");
paragraaf.appendChild(paragraafTekst);
document.getElementsByTagName("body")[0].appendChild(paragraaf);