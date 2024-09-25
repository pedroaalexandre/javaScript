nome = prompt("Qual o seu nome?", "Pedro Augusto");

n = prompt("Quantas vezes você quer exibir seu nome?");

cor = prompt("Escolha uma cor para o seu nome (escreva em inglês).");

for(i = 0; i < n; i++)
    document.write(`<p style="color: ${cor}">${i+1} - ${nome}</p>`);