fetch('https://randomuser.me/api')

    // Response (data) in JSON-formaat ophalen.
    .then(function(response) {
        return response.json()
    })

    // Response (data) in de console weergeven.
    .then(function(data) {
        console.log(data)
    })

    // Eventuele error bij problemen in de console weergeven. .catch(function(error) {
    .catch(function(error) {
        console.log(error)
    })

