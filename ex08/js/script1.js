if(jogador1 == 1 && jogador2 == 3 || jogador1 == 2 && jogador2 == 1 || jogador1 == 3 && jogador2 == 2){
    document.write("<p class='resultado'>O JOGADOR 1 VENCEU!</p>");
}else if(jogador2 == 1 && jogador1 == 3 || jogador2 == 2 && jogador1 == 1 || jogador2 == 3 && jogador1 == 2){
    document.write("<p class='resultado'>O JOGADOR 2 VENCEU!</p>");
}else{
    document.write("<p class='resultado'>EMPATE!</p>");
}