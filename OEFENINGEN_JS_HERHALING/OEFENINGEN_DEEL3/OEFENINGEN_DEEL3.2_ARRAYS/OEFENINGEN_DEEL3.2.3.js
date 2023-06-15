let arrayOpleidingen = ["Bachelor toegepast Informatica"
    , "Bachelor Switch2IT"
    , "Bachelor Electronica-ICT"
    , "Graduaat Programmeren"
    , "Graduaat IOT"
    , "Graduaat Digitale Vormgeving"];

arrayOpleidingen.unshift("Bachelor Multimedia- en Communicatietechnologie");
console.log(arrayOpleidingen);

opleidingenString = arrayOpleidingen.join("<br>");
console.log(arrayOpleidingen);
console.log(opleidingenString);

document.getElementById("uitkomst").innerHTML = opleidingenString;