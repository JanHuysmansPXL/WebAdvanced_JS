function telDeKlinkers () {
    let randomZin = prompt("Geef een random zin in.").toUpperCase();
    let lengteZin = randomZin.length;
    let lettersZin = randomZin.split("");
    let klinkers = ["A", "E", "I", "O", "U"];
    let aantalKlinkers = 0;


    for (let teller = 0; teller <= lengteZin; teller++ ) {
        if (klinkers.includes(lettersZin[teller])){
            aantalKlinkers = aantalKlinkers + 1;
        }
    }
    console.log(lengteZin);
    console.log(klinkers);
    console.log(lettersZin);
    console.log(aantalKlinkers);
    document.getElementById('uitkomst').innerHTML = "\"Het aantal klinkers is: " + aantalKlinkers + ".\"";
}

telDeKlinkers();