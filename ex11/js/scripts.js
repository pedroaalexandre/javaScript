var cartasBaralho = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27];
var tamanhoVetor = cartasBaralho.length;

for (var i = 0; i < 4; i++) {
    document.write(`<p>Cartas jogador ${i + 1}:</p>`);
    for (var k = 0; k < 3; k++) {
        var numAleatorio = Math.floor(Math.random() * cartasBaralho.length);
        document.write(`<img src="./cartas/carta${cartasBaralho[numAleatorio]}.png" alt="">`);
        cartasBaralho.splice(numAleatorio, 1);
    }
    console.log(cartasBaralho);
}