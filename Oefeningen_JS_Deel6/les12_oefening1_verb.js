fetch('https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);

    let titel  = document.createElement("h1");
    let titelTekst = document.createTextNode("weerbericht van " + data.name);
    titel.appendChild(titelTekst);
    document.getElementsByTagName("body")[0].appendChild(titel);

    let temp  = document.createElement("h1");
    let tempTekst = document.createTextNode("weerbericht van " + data.main.temp + " °C");
    titel.appendChild(tempTekst);
    document.getElementsByTagName("body")[0].appendChild(temp);

    let humi  = document.createElement("h1");
    let humiTekst = document.createTextNode("Vochtigheidsgraad van " + data.main.temp + " °C");
    titel.appendChild(humiTekst);
    document.getElementsByTagName("body")[0].appendChild(humi);

    let wind  = document.createElement("h1");
    let windTekst = document.createTextNode("Vochtigheidsgraad van " + data.main.temp + " °C");
    titel.appendChild(windTekst);
    document.getElementsByTagName("body")[0].appendChild(wind);

    let wolk  = document.createElement("h1");
    let wolkTekst = document.createTextNode("Vochtigheidsgraad van " + data.weather[0].description);
    titel.appendChild(wolkTekst);
    document.getElementsByTagName("body")[0].appendChild(wolk);

    })
.catch(function (error) {
    console.log(error);
})