function grootsteGetal () {

    let inputBezoeker = prompt("Geef een random getal in, of typ 'Stop' om te eindigen");
    let grootsteGetal = 0;

    if (inputBezoeker.toUpperCase() === "STOP") {
        alert("De eerste keer moet je een getal invoeren.");
    } else {
        if (parseFloat(inputBezoeker) > grootsteGetal) {
            grootsteGetal = parseFloat(inputBezoeker);
        }
    }
// Zolang de input niet "STOP" is, blijven draaien.
    while (inputBezoeker.toUpperCase() !== "STOP") {
        if (parseFloat(inputBezoeker) > grootsteGetal) {
            grootsteGetal = parseFloat(inputBezoeker);
        }
// Hier begint de prompt opnieuw. (While-Loop)
        inputBezoeker = prompt("Geef een random getal in, of typ 'Stop' om te eindigen");
    }
    console.log(grootsteGetal);
}

grootsteGetal();