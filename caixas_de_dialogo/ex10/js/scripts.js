valorInteiro = prompt("Quantas vezes seu nome será impresso?");

nome = prompt("Digite seu nome:");

for(i = 0; i < valorInteiro; i++)
    document.write(`<p>${i+1} - ${nome}</p>`);
