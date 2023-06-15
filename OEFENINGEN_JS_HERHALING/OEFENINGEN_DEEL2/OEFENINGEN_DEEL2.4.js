let zin = "Ik wil een lasagne van PXL-catering";
zin = zin.toUpperCase();

console.log (zin.charAt(0));
console.log (zin.charAt(2));
console.log (zin.lastIndexOf('k'));
console.log (zin.lastIndexOf('e'));
console.log (zin.length);

document.getElementById("uitkomst").innerHTML = zin;