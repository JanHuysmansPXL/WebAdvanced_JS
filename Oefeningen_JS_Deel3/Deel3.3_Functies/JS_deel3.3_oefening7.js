let startZin = "Deze oefeningen zijn héél leuk."
let zinArray = startZin.split(" ");
let lengteArray = parseInt(zinArray.length);

console.log(zinArray);
console.log(zinArray[0])
console.log(zinArray[0].charAt(0));
console.log(zinArray[1].charAt(0));
console.log(zinArray[1].charAt(0).toUpperCase());
console.log(lengteArray);

function alleWoordenStartenMetHoofdletter() {
    for (let woorden = 0; woorden <= lengteArray; woorden++){
        zinArray[woorden] = zinArray[woorden].charAt(0).toUpperCase() + zinArray[woorden].substring(1);
        let nieuweZin = zinArray.join(" ")
        console.log(zinArray[woorden]);
        document.getElementById("uitkomst").innerHTML = nieuweZin;
    }
}

alleWoordenStartenMetHoofdletter();





