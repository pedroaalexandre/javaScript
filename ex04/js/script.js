var n =  parseInt(prompt("Digite o menor número do intervalo (n):"));
var m =  parseInt(prompt("Digite o maior número do intervalo (m):"));

var numAleatorio = parseInt(Math.random()*(m - n + 1)+ n);
document.write(`<h1>Número aleatório entre ${n} e ${m}:</h1>`)
document.write(`<p>${numAleatorio}</p>`);
