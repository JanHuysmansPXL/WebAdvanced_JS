let antwoord = prompt("Sport je graag ?", "Ja/Nee").toUpperCase();

if (antwoord === "JA") {
    document.getElementById("uitkomst").innerText = "Just Do It!";
}
else {
    document.getElementById("uitkomst").innerText = "Jammer, blijf dan maar liggen!";
}