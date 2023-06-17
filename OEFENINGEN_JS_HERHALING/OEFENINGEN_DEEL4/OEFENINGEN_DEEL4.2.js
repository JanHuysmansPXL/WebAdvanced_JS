//Maak  een script waarbij je volgende wijzigingen doorvoert aan het DOM:

function domAanpassen() {
// OK • de volledige webpagina krijgt als font-family: Arial, Verdana, sans-serif;
    document.getElementsByTagName("body")[0].style.fontFamily = "Arial, Verdana, sans-serif";

// OK • de titel op de webpagina krijgt de tekstkleur donkergroen en wordt onderlijnd;
    document.getElementsByClassName("titel")[0].style.color = "#15FF15";
    document.getElementsByClassName("titel")[0].style.textDecoration = "underline";

// • je naam en voornaam worden vet en schuingedrukt.

    document.getElementsByClassName("naam")[0].style.fontWeight = "600";
    document.getElementsByClassName("naam")[0].style.fontStyle = "italic";
}

domAanpassen();