// let op examen - BIJ HET LADEN VAN DE PAGINA !! DIT IS EEN event is laden van een pagina !!

window.addEventListener('load', getLocation);

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }

    function showPosition(position) {
        let url = "https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude;


        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);

                let titel = document.createElement("h1");
                let titelTekst = document.createTextNode("weerbericht van " + data.name);
                titel.appendChild(titelTekst);
                document.getElementsByTagName("body")[0].appendChild(titel);

                let temp = document.createElement("h1");
                let tempTekst = document.createTextNode("Temperatuur van " + data.main.temp + " °C");
                titel.appendChild(tempTekst);
                document.getElementsByTagName("body")[0].appendChild(temp);

                let humi = document.createElement("h1");
                let humiTekst = document.createTextNode("Vochtigheidsgraad van " + data.main.humidity + "%");
                titel.appendChild(humiTekst);
                document.getElementsByTagName("body")[0].appendChild(humi);

                let wind = document.createElement("h1");
                let windTekst = document.createTextNode("Windsnelheid van " + data.main.windInKm + "km/h");
                titel.appendChild(windTekst);
                document.getElementsByTagName("body")[0].appendChild(wind);

                let wolk = document.createElement("h1");
                let wolkTekst = document.createTextNode("Bewolking: " + data.weather[0].description);
                titel.appendChild(wolkTekst);
                document.getElementsByTagName("body")[0].appendChild(wolk);

            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

