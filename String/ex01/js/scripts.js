/*O código faz o navegador perguntar ao usuário qual o nome completo e, em seguida, o exibe 10x por meio de um for.
Ex.: 1 - Pedro Augusto, 2 - Pedro Augusto, 3 - Pedro Augusto....*/

var primerNome = prompt("Qual o seu primeiro nome?");
var ultiNome = prompt("Qual seu último nome?");
var vezes = prompt("Quantas vezes seu nome deve aparecer?")
const COR = prompt("Em qual cor deseja imprimir seu nome? (Digite em inglês)")
let nomeCompleto = primerNome.concat(" ", ultiNome);

for (i=1; i<=vezes; i++){
    if(i % 2 == 0){
        document.write("<p style='color: " + COR + ";'>"+ i +" - "+ nomeCompleto +"</p>");
    }else{
        document.write("<p style='color: black;'>"+ i +" - "+ nomeCompleto +"</p>");
    }
}