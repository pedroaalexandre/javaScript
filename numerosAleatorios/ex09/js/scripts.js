var nomes = ["José da Silva", "Maria Clara", "Antonio Pereira", "Ana Rosa"];
var tamanhoVetor = nomes.length;

for(i = 0; i < tamanhoVetor; i++){
    var indiceAleat = parseInt(Math.random()*nomes.length);
    document.write(`<p>${i + 1}° Grupo: ${nomes[indiceAleat]}</p>`);
    nomes.splice(indiceAleat,1);
}