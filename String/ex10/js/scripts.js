document.write("<table border='1px'>");
document.write("    <th>Base decimal</th>");
document.write("    <th>Base binária</th>");
document.write("    <th>Base hexadecimal</th>");

var indice = prompt("Digite um número maior ou igual a 2:");

for(i = 0; i <= indice; i++){
    document.write("<tr>");
    document.write(`<td>${i}</td>`);
    document.write(`<td>${i.toString(2)}</td>`);
    document.write(`<td>${i.toString(16)}</td>`);
    document.write("</tr>");
}

document.write("</table>");