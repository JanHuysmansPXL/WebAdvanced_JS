let hondenrassen = new Array (10);
hondenrassen [1] = "Labrador retriever";
hondenrassen [2] = "Duitse herder";
hondenrassen [3] = "Golden retriever";
hondenrassen [4] = "Malteser";
hondenrassen [5] = "Shiba";
hondenrassen [6] = "Havanezer";
hondenrassen [7] = "Mechelaar";
hondenrassen [8] = "Cocker Spaniël";
hondenrassen [9] = "Boxer";
hondenrassen [10] = "Chow Chow";

let randomGetal = parseInt(prompt("geef een getal in tussen 1 en 10", "1-10"));

if (randomGetal > 0 && randomGetal <= 10) {
    document.getElementById("uitkomst").innerText = hondenrassen[randomGetal];
}  else {
    document.getElementById("uitkomst").innerText = "Sorry, katten niet toegelaten.";
}


