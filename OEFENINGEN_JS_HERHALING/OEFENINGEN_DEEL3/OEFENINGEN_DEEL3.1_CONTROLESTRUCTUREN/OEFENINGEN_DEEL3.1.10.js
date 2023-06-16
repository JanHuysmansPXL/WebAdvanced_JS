let aantalLijnen = 7;
let uitkomst = "";

for (let teller = 0; teller <= aantalLijnen; teller++) {
    for (let aantalHashtags = 0; aantalHashtags <= aantalLijnen; aantalHashtags++) {
        uitkomst = uitkomst + "#";
    }
    uitkomst = uitkomst + "<br>";
}

document.getElementById("respons").innerHTML = uitkomst;
console.log(uitkomst);