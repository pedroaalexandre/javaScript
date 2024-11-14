var boy = document.getElementById("boy");
var p = document.getElementById("texto");

boy.addEventListener("mouseenter", function (){
    boy.src = "img/assustado.png";
    p.innerHTML = "O que você quer?" 
});

boy.addEventListener("mouseout", function () {
    boy.src = "img/pensativo.png";
    p.innerHTML = "zzzzzz!";
});

boy.addEventListener("click", function () {
    var nome = prompt("Qual o seu nome?");
    console.log(nome);
    if(!nome){
        boy.src = "img/nervoso.png";
        p.innerHTML = "Não me faça perder meu tempo!"
    }else{
        boy.src = "img/alegre.png";
        p.innerHTML = `Seja, bem vindo ${nome}!`
    }
});