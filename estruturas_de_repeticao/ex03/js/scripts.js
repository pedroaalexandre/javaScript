var siglas = ["P2", "AP", "POO1", "FBD", "JSB"];
var nomesDisc = ["Projeto Sistema Web MVC e SQL", "Algoritmos e Programação", "Programação Orientada a Objetos 1", "Fundamentos de Banco de Dados", "JavaScript Básico"];

document.write(`<table border="1">`);
document.write("<tr>")
        document.write("<td><b>Código</b></td>")
        document.write("<td><b>Disciplina</b></td>")
    document.write("<tr>")
for(i in siglas) {
    document.write("<tr>")
        document.write(`<td>${siglas[i]}</td>`)
        document.write(`<td>${nomesDisc[i]}</td>`)
    document.write("<tr>")
}
document.write("</table>");