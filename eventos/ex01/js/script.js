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
