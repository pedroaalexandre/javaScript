var texto = prompt("Digite o texto:");

let texto1 = texto.split("");
console.log(texto1);

var texto2 = texto1.reverse();

let resultado = texto2.localeCompare(texto1);

if(resultado == 0) {
    alert("É um palíndromo!");
}else{
    alert("Não é um palíndromo!");
}