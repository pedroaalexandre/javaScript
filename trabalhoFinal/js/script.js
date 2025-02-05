window.addEventListener("DOMContentLoaded", function() {

    var dificuldade = document.getElementById("dificuldade");
    var temporizador = document.getElementById("temporizador");
    var numeroSort = document.getElementById("numeroSort");
    var btnPlay = document.getElementById("play");
    var btnPause = document.getElementById("pause");
    var btnStop = document.getElementById("stop");
    var acertos = document.getElementById("qntAcertos");
    var erros = document.getElementById("qntErros");
    var qntNumPares = document.getElementById("qntNumPares");
    var porcentAcertos = document.getElementById("porcentAcertos");
    var tempoRestante;      //Definir segundos

    const numColor = {par:"green", impar:"red", standard: "black"};

    //2º passo: Atualizar o tempo baseado no nível de dificuldade 
    dificuldade.addEventListener("change", function() {
        if(dificuldade.selectedIndex == 0) {
            temporizador.innerHTML = "00:00";
            tempoRestante = 0;
        }else if(dificuldade.selectedIndex == 1) {
            temporizador.innerHTML = "01:45";
            tempoRestante = 105;
        }else if(dificuldade.selectedIndex == 2) {
            temporizador.innerHTML = "01:15";
            tempoRestante = 75;
        }else {
            temporizador.innerHTML = "00:30";
            tempoRestante = 30;
        }
    })

    //3º passo: Sortear um número aleatório [1 a 100] a cada 1 segundo ao clicar em iniciar
    var numAleatorio;
    var sorteador;
    var timer;

    function displayNumero () {
        numAleatorio = parseInt(Math.random()*100) + 1;
        numeroSort.innerHTML = numAleatorio;
        numeroSort.style.color = numColor.standard;

        //7º passo: incrementar toda ver que um número par for sorteado
        if(numAleatorio % 2 == 0) {
            qntNumPares.textContent++;
        }

        if(qntNumPares.textContent != 0) {
            porcentAcertos.innerHTML = ((parseInt(acertos.textContent) / qntNumPares.textContent) * 100).toFixed(1);    //10º passo: % de acertos
        }
    }

    //8º passo: implementar o temporizador | funcao para decrementar o tempo e limpar os intervalos quando chegar em 0
    function decremenTempo () {
        if(tempoRestante > 0) {
            tempoRestante--;
            temporizador.innerHTML = formatarTempo(tempoRestante);
        }else{
            alert("Fim de jogo!")
            clearInterval(timer);
            clearInterval(sorteador);   //9º passo: para o tempo e a geração de números ao zerar o temporizador
        }
    }

    function pause () {
        clearInterval(sorteador);
        clearInterval(timer);
    }

    function start (velocidade) {
        sorteador = setInterval(displayNumero, velocidade);
        timer = setInterval(decremenTempo, 1000);
    }

    btnPlay.addEventListener ("click", function () {
        if(dificuldade.selectedIndex == 0) {
            alert("Selecione um nível de dificuldade.")     //11º passo: Somente iniciar com um nível de dificuldade selecionado
        }else if(dificuldade.selectedIndex == 1){
            start(1000);
        }else if(dificuldade.selectedIndex == 2) {
            start(600);
        }else{
            start(350);
        }
    })

    //4º passo: Pausar o sorteio dos números
    btnPause.addEventListener("click", function() {
        pause();
    })

    //12º passo: implementar botão parar, para zerar todas as informações
    btnStop.addEventListener("click", function() {
        pause();
        dificuldade.selectedIndex = 0;
        temporizador.innerHTML = "00:00";
        acertos.textContent = 0;
        erros.textContent = 0;
        qntNumPares.textContent = 0;
        numeroSort.innerHTML = "_";
        porcentAcertos.innerHTML = "0.0";
        numeroSort.style.color = numColor.standard;
    })

    //5º passo: incrementar números de acertos e erros
    acertos.textContent = 0;
    erros.textContent = 0;      //diferente do innerHtml, o textContent captura somente o texto dentro da tag

    numeroSort.addEventListener("click", function() {
        if(dificuldade.selectedIndex == 0) {
            alert("Selecione um nível de dificuldade.");
        }else{
            if(numAleatorio % 2 == 0) {
                acertos.textContent = parseInt(acertos.textContent) + 1;
                numeroSort.style.color = numColor.par;  //6º passo: se o clique for em um número par, fica verde
            }else{
                erros.textContent = parseInt(erros.textContent) + 1;
                numeroSort.style.color = numColor.impar;    //se o clique for em um número impar, fica vermelho
            }
        }
    })


    //8º passo: funcao para formatar o tempo em minutos e segundos
    function formatarTempo(segundos) {
        const minutos = Math.floor(segundos / 60);
        const segs = segundos % 60;
        return `${String(minutos).padStart(2, '0')}:${String(segs).padStart(2, '0')}`;
    }

})