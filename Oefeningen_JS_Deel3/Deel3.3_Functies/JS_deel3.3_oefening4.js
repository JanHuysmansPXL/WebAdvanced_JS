let randomZin = prompt("geef een random zin in.").toUpperCase();
let aangepasteZin = randomZin.charAt(0).toLowerCase() + randomZin.substring(1).toLowerCase();

function startMetHallo() {
    if (randomZin.substring(0,5) === "HALLO") {
        document.getElementById("uitkomst").innerHTML = randomZin;
    }
    else {
        randomZin = "Hallo" + " " + aangepasteZin;
        document.getElementById("uitkomst").innerHTML = randomZin;
    }
}

startMetHallo();

