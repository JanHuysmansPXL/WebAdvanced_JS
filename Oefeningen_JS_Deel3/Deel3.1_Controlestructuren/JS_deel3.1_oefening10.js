let aantalLijnen = 7;
let uitkomst = "";

for (let teller = 1; teller <= aantalLijnen; teller++) {
    for (let aantalHashtags = 0; aantalHashtags < teller; aantalHashtags++) {
        uitkomst = uitkomst + "#";
    }
    uitkomst = uitkomst + "<br>";
}
document.getElementById("uitkomst").innerHTML = uitkomst;
console.log(uitkomst);
