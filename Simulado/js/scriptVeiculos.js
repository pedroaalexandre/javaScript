window.addEventListener("DOMContentLoaded", function() {
    var txtNome = document.getElementById("txtNome");
    var infoVeiculo = document.getElementById("infoVeiculo");
    var fotoVeiculo = document.getElementById("fotoVeiculo");
    var btnPerfil = document.getElementById("btnPerfil");

    var user = localStorage.getItem("users");
    user = JSON.parse(user);

    txtNome.innerHTML = user.username;

    var vetVeiculosShop = [
        {img:"carro1.jpg", info:"<li><b>Fabricante:</b>Honda</li><li><b>Nome:</b>Civic</li><li><b>Potência do motor:</b>150 cv</li><li><b>Garantia:</b>3 anos</li><li><b>Consumo (cidade):</b>9,7 km/l</li>"},
        {img:"carro2.jpg", info:"<li><b>Fabricante:</b>Toyota</li><li><b>Nome:</b>Corolla</li><li><b>Potência do motor:</b>144 cv</li><li><b>Garantia:</b>3 anos</li><li><b>Consumo (cidade):</b>10,6 km/l</li>"}
    ];

    var vetVeiculosNat = [
        {img:"carro3.jpg", info:"<li><b>Fabricante:</b>Ford</li><li><b>Nome:</b>Troller</li><li><b>Potência do motor:</b>200 cv</li><li><b>Garantia:</b>3 anos</li><li><b>Consumo (cidade):</b>7,7 km/l</li>"},
        {img:"carro4.jpg", info:"<li><b>Fabricante:</b>Jeep</li><li><b>Nome:</b>Wrangler</li><li><b>Potência do motor:</b>199 cv</li><li><b>Garantia:</b>3 anos</li><li><b>Consumo (cidade):</b>3,1 km/l</li>"}
    ];

    var slideAtual = 0;

    function mostrarVeiculo() {
        if(user.carro == 1){
            fotoVeiculo.src = `img/${vetVeiculosShop[slideAtual].img}`;
            infoVeiculo.innerHTML = vetVeiculosShop[slideAtual].info;
            slideAtual++;
            if(slideAtual > 1) slideAtual = 0;
        }else{
            fotoVeiculo.src = `img/${vetVeiculosNat[slideAtual].img}`;
            infoVeiculo.innerHTML = vetVeiculosNat[slideAtual].info;
            slideAtual++;
            if(slideAtual > 1) slideAtual = 0;
        }    
    }

    btnPerfil.addEventListener("click", function () {
        localStorage.clear();
        window.open("index.html", "_self");
    });

    setInterval(mostrarVeiculo, 2000);


    console.log(user);
});