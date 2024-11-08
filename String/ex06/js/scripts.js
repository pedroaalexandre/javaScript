var texto = prompt("Digite um texto:");

let arrayTexto = texto.split(" ");
let primeiraPalavra = (arrayTexto[0]);
let ultimaPalavra = (arrayTexto[arrayTexto.length - 1]);

document.write(primeiraPalavra.concat(" ", ultimaPalavra));