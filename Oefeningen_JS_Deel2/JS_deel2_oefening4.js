let stringwaarde = "Ik wil een lasagne van PXL-Catering.";
stringwaarde = stringwaarde.toUpperCase();

console.log(stringwaarde.charAt(0));
console.log(stringwaarde.charAt(3));
console.log(stringwaarde.lastIndexOf("k"));
console.log(stringwaarde.lastIndexOf("e"));
console.log(stringwaarde.length);

document.getElementById("uitkomst").innerText = stringwaarde;