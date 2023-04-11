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

document.getElementById('uitkomst').innerHTML = (hondenrassen.join("<br>"));

hondenrassen.splice(4, 4, "Basset Fauve de Bretagne", "Bull Terriër", "Deense Boerderijhond", "Samson")

document.getElementById('uitkomst2').innerHTML = (hondenrassen.join("<br>"));