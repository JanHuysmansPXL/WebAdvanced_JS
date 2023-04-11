let invoerGetal1 = parseInt(prompt("Geef een getal in tussen 0 en 100"), "0-100");
let invoerGetal2 = parseInt(prompt("Geef een tweede getal in tussen 0 en 100"), "0-100");

function isVijftig() {
    if (invoerGetal1 === 50 || invoerGetal2 === 50) {
        document.getElementById('uitkomst').innerHTML = "Hoera VIJFTIG";
    }
    else if (invoerGetal1 + invoerGetal2 === 50) {
        document.getElementById('uitkomst').innerHTML = "Hoera VIJFTIG";
    }
    else {
        console.log("Spijtig");
    }
}

isVijftig();