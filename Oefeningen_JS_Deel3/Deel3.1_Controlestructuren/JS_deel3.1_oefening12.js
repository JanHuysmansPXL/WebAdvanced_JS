let aantalLijnen = parseInt(prompt("Geef een getal tussen 1 en 10", "1-10"));
let uitkomst = "";

if (aantalLijnen >= 0 && aantalLijnen <= 10) {
    for (let teller = 0; teller <= aantalLijnen; teller++) {
        uitkomst = "";
        for (let spaties = 0; spaties < aantalLijnen - teller; spaties++) {
            uitkomst = uitkomst + " ";
        }
        for (let hashtag = 0; hashtag < teller; hashtag++) {
            uitkomst = uitkomst + "#";
        }
    }
} else {
    uitkomst = "Niet mogelijk";
}
document.getElementById("uitkomst").innerHTML = uitkomst;
