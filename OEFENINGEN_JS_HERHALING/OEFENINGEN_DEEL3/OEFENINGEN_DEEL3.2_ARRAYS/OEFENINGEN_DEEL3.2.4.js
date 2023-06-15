let hondenrassen = new Array(10);
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

let invoergetal = prompt("geef een getal tussen 1 en 10", "1-10");

if (invoergetal > 10 || invoergetal < 0) {
    alert("Sorry katten niet toegelaten..");
}
else {
    alert("Je hondenras is " + hondenrassen[invoergetal]);
}

