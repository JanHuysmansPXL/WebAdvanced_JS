function zinSplitsen() {
    let randomZin = prompt("Geef een random zin in.");
    let lengteZin = randomZin.length;
    let randomGetal = parseInt(prompt("geef een random getal in."));

    if (randomGetal >= 1 && randomGetal <= lengteZin) {
        let zinDeel1 = randomZin.substring(0, randomGetal);
        let zinDeel2 = randomZin.substring(randomGetal);
        alert("Deel 1 van de zin is: " + zinDeel1 + " \\ " + "Deel 2 van de zin is: " + zinDeel2)
        document.getElementById("uitkomst").innerHTML = "Deel 1 van de zin is: " + zinDeel1 + "<br>" + "Deel 2 van de zin is: " + zinDeel2;
    }
    else {
        alert("FOUT !!");
    }
}

zinSplitsen();