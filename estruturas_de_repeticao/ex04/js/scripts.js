var passagHomens = [];
var passagMulheres = [];
var sexo, nome;

var totalPassageiros = prompt("Quantos passageiros tem no ônibus?");

for(i = 0; i < totalPassageiros; i++) {
    // Leitura do sexo
    sexo = prompt(`Qual é o sexo do passageiro ${i + 1}(H ou M)?`);

    //Leitura nome cada passageiro
    nome = prompt(`Qual o nome do passageiro ${i + 1}?`);

    //Condição: Homem ou mulher?
    if(sexo == "H")
        passagHomens.push(nome);
    else passagMulheres.push(nome);   
}

var nroIteracoes;
if(passagHomens.length > passagMulheres.length)
    nroIteracoes = passagHomens.length
else nroIteracoes = passagMulheres.length

document.write(`<table>`);

passagHomens.sort();
passagMulheres.sort();

for(i = 0; i < nroIteracoes; i++) {
    document.write(`      <tr>`);

    if(passagMulheres[i] != undefined) {
        document.write(`        <td>${passagMulheres[i]}</td>`);
    }else{
        document.write("<td>[-]</td>");
    }

    if(passagHomens[i] != undefined) {
        document.write(`        <td>${passagHomens[i]}</td>`);
    }else{
        document.write("<td>[-]</td>");
    }
}

document.write(`</table>`);

console.log(passagHomens);
console.log(passagMulheres);