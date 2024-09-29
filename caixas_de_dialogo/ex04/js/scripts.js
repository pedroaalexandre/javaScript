nota1 = parseFloat(prompt("Nota do 1° bimestre:"));
nota2 = parseFloat(prompt("Nota do 2° bimestre:"));

if((nota1  + nota2) >= 60) {
    alert("Aluno aprovado. Nota final: " + (nota1 + nota2));
}else{
    alert("Aluno reprovado. Nota final: " + (nota1 + nota2) + ". Faltaram " + (60 - (nota1 + nota2)) + " pontos.")
}