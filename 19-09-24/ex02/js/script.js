//alert

//confirm

// Tipos primitivos:

// idade = 10;
// console.log(typeof(idade)); //number (interger, float...)

// idade = "wilton";
// console.log(typeof(idade)); //string

// idade = true;
// console.log(typeof(idade)); //boolean

nome = prompt("Qual é seu nome?");

if((nome == null) || (nome.trim() == ""))
    alert("Ah, que pena, você não informou sue nome");
else

idade = prompt("Qual a sua idade?");

while((idade <= 0) || (idade > 130))
    idade = prompt("Digite um idade entre 0 e 130")

if (idade >= 18)
    alert(`${nome}, você tem idade suficiente para tirar CNH!`); //${} = template string
else
    alert(`${nome}, você não tem idade para tirar CNH!`);
