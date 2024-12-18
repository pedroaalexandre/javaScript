window.addEventListener("DOMContentLoaded", function() {
    var contador = parseInt(Math.random()*(10 - 5 + 1) + 5);
    var contagem = document.getElementById("contagem");

    contagem.innerHTML = contador--;

    function regressiva () {
        contagem.innerHTML = contador--;

        if(contador < 0) {
            clearInterval(contagemRegressiva);
            window.open("verVeiculos.html", "_self")
        }else{
            if(contador < 3) contagem.style.color = "red";
        }
    }

    var contagemRegressiva = setInterval(regressiva, 1000);
});