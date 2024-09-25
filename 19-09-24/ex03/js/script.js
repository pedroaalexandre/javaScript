nome = prompt("Informe seu nome");

nota1 = parseFloat(prompt("Informe a nota 1 [0 - 50]:"));
nota2 = parseFloat(prompt("Informe a nota 1 [0 - 50]:"));

soma = nota1 + nota2;

if(soma >= 60)
    alert(`${nome}, você está APROVADO. Nota final: ${soma}`);
else
    alert(`${nome}, você está REPROVADO. Nota final: ${soma}. Faltaram ${60 - soma} pontos.`);
