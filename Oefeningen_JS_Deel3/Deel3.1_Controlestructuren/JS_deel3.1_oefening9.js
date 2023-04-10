let inputGetal = parseInt(prompt("Geef een getal tussen 1 en 10", "1-10"));
let teller;
let maaltafel;
let uitkomst = "";

// for-loop telt op tot 10e teller.
// Optellen bij uitkomst om linebreak te verkrijgen bij output. : uitkomst + " " + ...

if (inputGetal < 0 || inputGetal > 10) {
    document.getElementById("uitkomst").innerHTML = "Niet mogelijk";
}
else {
for (teller = 0; teller <=10; teller++) {
    maaltafel = teller * inputGetal;
    uitkomst = uitkomst + teller + " " + "*" + " " + inputGetal + " " + "=" + " " + maaltafel + "<br>";
    }
    document.getElementById("uitkomst").innerHTML = uitkomst;
}

