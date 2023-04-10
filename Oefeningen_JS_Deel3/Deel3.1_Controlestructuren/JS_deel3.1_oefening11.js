let aantalLijnen = parseInt(prompt("Geef een getal tussen 1 en 10", "1-10"));
let uitkomst = "";

if (aantalLijnen < 0 || aantalLijnen > 10) {
    uitkomst = "Niet mogelijk";
}
else {
    for (let teller = 1; teller <= aantalLijnen; teller++) {
        for (let aantalHashtags = 0; aantalHashtags < teller; aantalHashtags++) {
            uitkomst = uitkomst + "#";
        }
        uitkomst = uitkomst + "<br>";
    }
}
document.getElementById("uitkomst").innerHTML = uitkomst;
