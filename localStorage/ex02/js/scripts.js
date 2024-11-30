const candidato1 = document.getElementById("candidato1");
const candidato2 = document.getElementById("candidato2");
const candidato3 = document.getElementById("candidato3");
const candidato4 = document.getElementById("candidato4");
var btnSair = document.getElementById("btnSair");
var btnMenu = document.getElementById("btnMenu");

candidato1.addEventListener("mouseover", function () {
    candidato1.style.backgroundColor = 'darkgreen';
});
candidato1.addEventListener("mouseout", function() {
    candidato1.style.backgroundColor = 'lightgreen';
});

candidato2.addEventListener("mouseover", function () {
    candidato2.style.backgroundColor = 'darkgreen';
});
candidato2.addEventListener("mouseout", function() {
    candidato2.style.backgroundColor = 'lightgreen';
});

candidato3.addEventListener("mouseover", function () {
    candidato3.style.backgroundColor = 'darkgreen';
});
candidato3.addEventListener("mouseout", function() {
    candidato3.style.backgroundColor = 'lightgreen';
});

candidato4.addEventListener("mouseover", function () {
    candidato4.style.backgroundColor = 'darkgreen';
});
candidato4.addEventListener("mouseout", function() {
    candidato4.style.backgroundColor = 'lightgreen';
});

var cont01 = 0;
var cont02 = 0;
var cont03 = 0;
var cont04 = 0;
var cont3 = document.getElementById("cont3");
var cont4 = document.getElementById("cont4");

if(candidato1.addEventListener("click", function(){
    cont01 += 1;
    texto1 = document.getElementById("texto1").innerHTML = `${cont01}`;
}));

if(candidato2.addEventListener("click", function(){
    cont02 += 1;
    texto2 = document.getElementById("texto2").innerHTML = `${cont02}`;
}));

if(candidato3.addEventListener("click", function(){
    cont03 += 1;
    texto3 = document.getElementById("texto3").innerHTML = `${cont03}`;
}));

if(candidato4.addEventListener("click", function(){
    cont04 += 1;
    texto4 = document.getElementById("texto4").innerHTML = `${cont04}`;
}));

btnSair.addEventListener("click", function(){
    window.location.replace("../index.html");
});

btnMenu.addEventListener("click", function(){
    window.location.href = "../jogoMenu.html";
});