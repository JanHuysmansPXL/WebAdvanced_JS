// --- 2. XMLHttpRequest

/*
Het XMLHttpRequest object wordt veel gebruikt in AJAX programmering.
Via een XMLHttpRequest kunnen we verschillende soorten data ophalen.

--  let xhttp = new XMLHttpRequest();

In deze cursus gaan we echter geen gebruik meer maken van het XMLHttpRequest, maar van Fetch!
*/

// --- 3. FETCH API ---

// Onderstaande script geeft weer hoe we stap voor stap data ophalen en weergeven in de console.
// Daarnaast voorzien we ook een mogelijke error-weergave in de console.
// THEN THEN CATCH !!


// URL/pad van de bron ingeven
fetch(‘URL’)

// Response (data) in JSON-formaat ophalen.
.then(function(response) {
    return response.json()
})

    // Response (data) in de console weergeven.
    .then(function(data) {
        console.log(data)
    })

// Eventuele error bij problemen in de console weergeven. .catch(function(error) {
console.log(error)
})


/*
Een promise heeft altijd één van deze drie statussen:
    • Pending, de initiële status, de actie is niet fulfilled én niet rejected.
    • Fulfilled, de actie is succesvol voltooid.
    • Rejected, de actie is mislukt.

    Een ‘pending’ promise kan zowel de status ‘fulfilled’ als ‘rejected’ krijgen.
    Een promise roept, wanneer ‘fulfilled’, de 'then-methode' met een response-object op.
    Het response-object kent verschillende manieren om de response te verwerken. (bvb. JSON)
*/

//Bovenstaande script kunnen we ook vereenvoudigen door te werken met de ‘arrow function expression’.

fetch(‘URL’)
.then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

//3.2 POST – DATA VERSTUREN
// Via de Fetch API en het HTTP Request ‘POST’ kunnen we DATA VERSTUREN.
// Onderstaande script geeft stap voor stap weer hoe we de data versturen en bijkomend weergeven in de console.
// Daarnaast voorzien we ook een mogelijke error-weergave in de console.


fetch('URL', {
// Geef de methode op die we gebruiken.
    method: 'POST',
// Voeg de HTTP Headers toe.
    headers: {
        "Content-type": "application/json; charset=UTF-8" },
// Voeg de body/inhoud toe in JSON-formaat.
    body: JSON.stringify({
        inhoud: "Dit is de inhoud“
    })
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))