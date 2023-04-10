let antwoord = parseInt(prompt("geef een random getal in"));

if (antwoord < 50) {
    document.getElementById("uitkomst").innerText = "Te laag";
}
else if (antwoord === 50) {
    document.getElementById("uitkomst").innerText = "Goed gegokt";
}
else {
    document.getElementById("uitkomst").innerText = "Te Hoog";
}