let hondenrassen = new Array (10);
hondenrassen [0] = "Chow Chow";
hondenrassen [1] = "Labrador retriever";
hondenrassen [2] = "Duitse herder";
hondenrassen [3] = "Golden retriever";
hondenrassen [4] = "Malteser";
hondenrassen [5] = "Shiba";
hondenrassen [6] = "Havanezer";
hondenrassen [7] = "Mechelaar";
hondenrassen [8] = "Cocker Spaniël";
hondenrassen [9] = "Boxer";

hondenrassen.unshift("Affenpincher", "Basset Fauve de Bretagne", "Bull Terriër", "Deense Boerderijhond", "Samson")
console.log(hondenrassen);

let randomGetal = parseInt(prompt("geef een getal in tussen 1 en 15", "1-15"));

if (randomGetal > 0 && randomGetal <= 15) {
    document.getElementById("uitkomst").innerText = hondenrassen[randomGetal];
}  else {
    document.getElementById("uitkomst").innerText = "Sorry, katten niet toegelaten.";
}

