//Op de webpagina staat een tabel met 24 cellen.
//
// Iedere cel heeft een nummertje van één tot en met 24.
// Bij het klikken op een random nummertje, verdwijnt dat nummertje
// en krijg je een toffe spreuk of afbeelding te zien in de cel.


let box = document.getElementById('box');
let vakje = document.getElementsByClassName("vakje");
let aantalVakjes = document.getElementsByClassName("vakje").length;
console.log(vakje);
console.log(aantalVakjes);

let spreuken = ["Spreuk 1", "Spreuk 2", "Spreuk 3", "Spreuk 4", "Spreuk 5", "Spreuk 6", "Spreuk 7", "Spreuk 8"];
console.log(spreuken);

// INDEX BEPALEN VIA AANTAL CHILDREN VAN DE CONTAINER. CLICK OP ZOVEELSTE 'CHILD' EN OPVULLEN.
for (let teller = 0, aantalVakjes = box.children.length; teller < aantalVakjes; teller++) {
        //CLICK OP ZOVEELSTE 'CHILD' GEEFT EIGEN TELLER WEER.
        box.children[teller].onclick = function(){
            box.children[teller].style.color = 'blue';
            box.children[teller].style.border = '3px solid dodgerblue';
            box.children[teller].style.backgroundColor = 'lavender';
            box.children[teller].innerHTML = spreuken[teller];
            alert(spreuken[teller]);
        }
}

// let huidigespreuk = document.getElementsByClassName("vakje")