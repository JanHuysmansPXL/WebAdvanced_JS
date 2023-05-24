document.getElementById('ophalen').addEventListener('click', getRandomUser);

function getRandomUser(){
    fetch('https://randomuser.me/api')

        .then(function(response) {
            return response.json()
        })

        .then(function(data) {
            document.getElementById('naam').innerHTML = data.results[0].name.first + ' ' + data.results[0].name.last
            document.getElementById('email').innerHTML = data.results[0].email
            document.getElementById('foto').src = data.results[0].picture.large
        })

        .catch(function(error) {
            console.log(error)
        })
}

