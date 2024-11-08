var texto = prompt("Digite um texto:");
var letra = prompt("Digite um letra:");

let arrayTexto = texto.split(" ");

for(var i in arrayTexto){
    if(arrayTexto[i].charAt(0) == letra.toLowerCase() || arrayTexto[i].charAt(0) == letra.toUpperCase()){
        document.write(arrayTexto[i] + " ");
    }
}