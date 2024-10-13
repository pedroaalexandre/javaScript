var passageiros = ["Pedro", "Felipe", "Arthur", "Alexandre", "Matheus"];
var idadePassageiros = [21, 19, 19, 17, 18];
var somaIdades = 0;

for(i = 0; i < idadePassageiros.length; i++){
    somaIdades += idadePassageiros[i];
}
var mediaIdades = parseInt((somaIdades / idadePassageiros.length));

var indiceSorteio = parseInt(Math.random() * passageiros.length);
console.log(passageiros[indiceSorteio]);

document.write("<table>");
for(i = 0; i < passageiros.length; i++){
    document.write(`<tr>`)
    document.write(`<td>${passageiros[i]}</td>`)
    document.write(`</tr>`)
}
document.write("</table>");

document.write(`<h2>Média de idades:</h2>`)
document.write(`<p>${mediaIdades}</p>`)

document.write(`<h2>Ganhador do sorteio:</h2>`)
document.write(`<p>${passageiros[indiceSorteio]}</p>`)