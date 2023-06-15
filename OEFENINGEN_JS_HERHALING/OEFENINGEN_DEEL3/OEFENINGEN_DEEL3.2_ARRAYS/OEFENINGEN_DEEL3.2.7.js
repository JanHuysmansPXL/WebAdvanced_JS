let planeten = new Array(8)
planeten[0] = "Mercurius";
planeten[1] = "Venus";
planeten[2] = "Aarde";
planeten[3] = "Mars";
planeten[4] = "Jupiter";
planeten[5] = "Saturnus";
planeten[6] = "Uranus";
planeten[7] = "Neptunus";

console.log(planeten);

planeten.splice(7, 0, "Pluto");
console.log(planeten);
