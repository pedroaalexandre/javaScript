//Cria um objeto com a data atual
const dataAtual = new Date();
var diasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

document.write(`Hoje é ${diasSemana[dataAtual.getDay()]}!`);
