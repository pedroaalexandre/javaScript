var nomeCompleto = prompt("Digite seu nome completo:");

let arrayNome = nomeCompleto.split(" ");

let primerNomeMaiusculo = arrayNome[0].toUpperCase();

let restoNomeMinusculo = '';

for(i = 1; i < arrayNome.length; i++){
    restoNomeMinusculo += arrayNome[i].concat(" ");
}

alert(primerNomeMaiusculo.concat(" ", restoNomeMinusculo.toLowerCase()));