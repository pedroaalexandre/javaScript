var boy = document.getElementById("boy");
var p = document.getElementById("texto");
var btnSair = document.getElementById("btnSair");
var btnMenu = document.getElementById("btnMenu");

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
        boy.classList.add("nervoso");
        p.innerHTML = "Não me faça perder meu tempo!"
        boy.addEventListener("mouseout", function(){
            boy.classList.remove("nervoso");
        });
    }else{
        boy.src = "img/alegre.png";
        boy.classList.add("alegre");
        p.innerHTML = `Seja, bem vindo ${nome}!`
        boy.addEventListener("mouseout", function(){
            boy.classList.remove("alegre");
        });
    }
});

btnSair.addEventListener("click", function(){
    window.location.replace("../index.html");
});

btnMenu.addEventListener("click", function(){
    window.location.href = "../jogoMenu.html";
});