var numUsuario = prompt("Digite um número (Sorteio de 1 a N):");
var numAleatorio = parseInt(Math.random()*numUsuario + 1);

document.write(`<p>${numAleatorio}</p>`);