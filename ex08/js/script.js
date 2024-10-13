var jogador1 = parseInt((Math.random()*3)+1);
var jogador2 = parseInt((Math.random()*3)+1);

document.write(`<div>`)
document.write(`<p>JOGADOR 1</p>`)
document.write(`<img src="./img/${jogador1}.png" alt="">`)
document.write(`</div>`)

document.write(`<div>`)
document.write(`<p>JOGADOR 2</p>`)
document.write(`<img src="./img/${jogador2}.png" alt="">`)
document.write(`</div>`)