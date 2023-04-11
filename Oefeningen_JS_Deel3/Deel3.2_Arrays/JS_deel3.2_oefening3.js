let opleidingen = ["Bachelor toegepast Informatica", "Bachelor Switch2IT", "Bachelor Electronica-ICT", "Graduaat Programmeren", "Graduaat IOT", "Graduaat Digitale Vormgeving"];

// Toevoegen element aan het einde
opleidingen.push("Bach. Multimedia en Commmunicatietechnologie");

//Weergeven van array -> string met 'JOIN' en linebreak.
document.getElementById("uitkomst").innerHTML = opleidingen.join("<br>");