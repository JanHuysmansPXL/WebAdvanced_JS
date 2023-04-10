let antwoord = prompt("Sport je graag ?", "Ja/Nee").toUpperCase();

/*
if (antwoord === "JA") {
    document.getElementById("uitkomst").innerText = "Just Do It!";
}
else {
    document.getElementById("uitkomst").innerText = "Jammer, blijf dan maar liggen!";
}
*/

switch (antwoord) {
    case "JA":
        document.getElementById("uitkomst").innerText = "Just Do It!";
        break;
    case "NEE":
        document.getElementById("uitkomst").innerText = "Jammer";
        break;
    default:
        document.getElementById("uitkomst").innerText = "Dat was niet duidelikk..";
}