document.getElementById("tonen").addEventListener('click', tonenknop)

function tonenknop ()
{
    let naam = document.getElementById("naam").value;
    if (naam === ""){
        alert("Vul een naam in!");
    }

    else {
        document.getElementById("uitkomst").innerHTML += naam + "<br>";
    }

    naam.style.color = "#f00"
}

document.getElementById("wissen").addEventListener('click', verwijderknop);

function verwijderknop() {
    let naam = document.getElementById("naam").value
    if (naam === "") {
        alert("Vul een naam in!")
    }
    else
    {
        document.getElementById("uitkomst").innerHTML = "";
    }
}