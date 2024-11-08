var frase = prompt("Digite o texto:", "O carro quebrou na estrada de São Paulo. O carro foi levado para a oficina.");

var palavra1 = prompt("Digite a primeira palvra: ", "carro");
var palavra2 = prompt("Digite a segunda palavra: ", "caminhão");

let substituir = frase.replaceAll(palavra1, palavra2);
alert(substituir);