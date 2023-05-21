document.getElementsByTagName("button")[0].addEventListener('click', tekstGroter);
document.getElementsByTagName("button")[1].addEventListener('click', tekstKleiner);

function tekstGroter() {
    let aantalTitels = document.getElementsByTagName("h1").length;
    for (let teller = 0; teller < aantalTitels; teller++) {
        document.getElementsByTagName("h1")[teller].style.fontSize = "48px";
    }
    let aantalParagrafen = document.getElementsByTagName("p").length;
    for (let teller = 0; teller < aantalTitels; teller++) {
        document.getElementsByTagName("h1")[teller].style.fontSize = "24px";
    }
}

function tekstKleiner() {
    let aantalTitels = document.getElementsByTagName("h1").length;
    for (let teller = 0; teller < aantalTitels; teller++) {
        document.getElementsByTagName("h1")[teller].style.fontSize = "22px";
    }
    let aantalParagrafen = document.getElementsByTagName("p").length;
    for (let teller = 0; teller < aantalTitels; teller++) {
        document.getElementsByTagName("h1")[teller].style.fontSize = "14px";
    }
}