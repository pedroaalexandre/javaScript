window.addEventListener("DOMContentLoaded", function() {

    function impressaoAlert(padrao,txt) {
        if(padrao.test(txt.value))
            alert("Válido");
        else
            alert("Inválido");
    }

    //Número binário
    var txtBinario = document.getElementById("txtBinario");
    var btnValidarBin = document.getElementById("btnValidarBin");

    btnValidarBin.addEventListener("click", function () {
        var padrao = /^\d{0,}[0-1]$/;

        impressaoAlert(padrao, txtBinario);
    })

    //Número hexadecimal
    var txtHexa = document.getElementById("txtHexa");
    var btnValidarHexa = document.getElementById("btnValidarHexa");

    btnValidarHexa.addEventListener("click", function() {
        var padrao = /^[A-F0-9]+$/i;

        impressaoAlert(padrao, txtHexa);
    })

    //Número decimal
    var txtDecimais = document.getElementById("txtDecimais");
    var btnValidarDec = document.getElementById("btnValidarDec");

    btnValidarDec.addEventListener("click", function() {
        var padrao = /^\d+[,.]\d+$/;

        impressaoAlert(padrao, txtDecimais);
    })

    //Número real
    var txtReais = document.getElementById("txtReais");
    var btnValidarReal = document.getElementById("btnValidarReal");

    btnValidarReal.addEventListener("click", function() {
        var padrao = /^\d+|-\d+|\d+[,.]\d+|-\d+[,.]\d+$/;

        impressaoAlert(padrao, txtReais);
    })

    //Horário 00:00:00
    var txtHorario = document.getElementById("txtHorario");
    var btnValidarHora = document.getElementById("btnValidarHora");

    btnValidarHora.addEventListener("click", function() {
        var padrao = /^\d{2}:\d{2}:\d{2}$/;

        impressaoAlert(padrao, txtHorario);
    })

    //Data nascimento
    var txtNascimento = document.getElementById("txtNascimento");
    var btnValidarNasc = document.getElementById("btnValidarNasc");
    
    btnValidarNasc.addEventListener("click", function() {
        var padrao = /^\d{2}\/\d{2}\/(\d{4}|\d{2})$/;

        impressaoAlert(padrao, txtNascimento);
    })

    //CEP
    var txtCep = document.getElementById("txtCep");
    var btnValidarCep = document.getElementById("btnValidarCep");

    btnValidarCep.addEventListener("click", function() {
        var padrao = /^\d{2}\.\d{3}-\d{3}$/;

        impressaoAlert(padrao, txtCep);
    })

    //CPF
    var txtCpf = document.getElementById("txtCpf");
    var btnValidarCpf = document.getElementById("btnValidarCpf");

    btnValidarCpf.addEventListener("click", function() {
        var padrao = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

        impressaoAlert(padrao, txtCpf);
    })

    //CNPJ
    var txtCnpj = document.getElementById("txtCnpj");
    var btnValidarCnpj = document.getElementById("btnValidarCnpj");

    btnValidarCnpj.addEventListener("click", function() {
        var padrao = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;

        impressaoAlert(padrao, txtCnpj);
    })

    //Número entre parênteses
    var txtParenteses = document.getElementById("txtParenteses");
    var btnValidarParenteses = document.getElementById("btnValidarParenteses");
    
    btnValidarParenteses.addEventListener("click", function() {
        var padrao = /^\(\d+\)$/;

        impressaoAlert(padrao, txtParenteses);
    })

    //Email
    var txtEmail = document.getElementById("txtEmail");
    var btnValidarEmail = document.getElementById("btnValidarEmail");

    btnValidarEmail.addEventListener("click", function() {
        var padrao = /^(\w+|\d+)@(\d+|\w+)\.\w{3}$/;

        impressaoAlert(padrao, txtEmail);
    })

    //Domínio ou IPv4
    var txtEndereco = document.getElementById("txtEndereco");
    var btnValidarIP = document.getElementById("btnValidarIP");

    btnValidarIP.addEventListener("click", function() {
        var padrao = /^((\d{3}\.\d{3}\.\d\.\d)|(\d{3}\.\d{3}\.\d{3}\.\d{3}))$/;
        
        impressaoAlert(padrao, txtEndereco);
    })

    //Altura
    var txtAltura = document.getElementById("txtAltura");
    var btnValidarAltura = document.getElementById("btnValidarAltura");

    btnValidarAltura.addEventListener("click", function() {
        var padrao = /^((\d,\d{1,2})|(\d.\d{1,2}))$/;

        impressaoAlert(padrao, txtAltura);
    })

    //Nome próprio
    var txtNomeProprio = document.getElementById("txtNomeProprio");
    var btnValidarNome = document.getElementById("btnValidarNome");

    btnValidarNome.addEventListener("click", function() {
        var padrao = /^[A-Z]\w+$/;

        impressaoAlert(padrao, txtNomeProprio);
    })

    //Telefone
    var txtTelefone = document.getElementById("txtTelefone");
    var btnValidarTel = document.getElementById("btnValidarTel");

    btnValidarTel.addEventListener("click", function() {
        var padrao = /^\+\d{2}\(\d{2}\)\d{5}-\d{4}$/;

        impressaoAlert(padrao, txtTelefone);
    })

    //Texto - IFTM campus Uberlândia” ou “IFTM campus Uberlândia Centro
    var txtTexto = document.getElementById("txtTexto");
    var btnValidarTexto = document.getElementById("btnValidarTexto");

    btnValidarTexto.addEventListener("click", function() {
        var padrao = /^IFTM campus (Uberlândia|Uberlândia Centro)$/;

        impressaoAlert(padrao, txtTexto);
    })

    //Número de 1 a 100
    var txtNumero = document.getElementById("txtNumero");
    var btnValidarNum = document.getElementById("btnValidarNum");

    btnValidarNum.addEventListener("click", function() {
        var padrao = /^[1-9][0-9]?|100$/;

        impressaoAlert(padrao, txtNumero);
    })

    //Placa Mercosul
    var txtPlaca = document.getElementById("txtPlaca");
    var btnValidarPlaca = document.getElementById("btnValidarPlaca");

    btnValidarPlaca.addEventListener("click", function() {
        var padrao = /^[A-Z]{3}\d[A-Z]\d{2}$/;

        impressaoAlert(padrao, txtPlaca);
    })

    //Vogais e/ou "b", "c", "d"
    var txtVogais = document.getElementById("txtVogais");
    var btnValidarVogais = document.getElementById("btnValidarVogais");

    btnValidarVogais.addEventListener("click", function() {
        var padrao = /^[b,c,d,a,e,i,o,u]+$/i;

        impressaoAlert(padrao, txtVogais);
    })

    //Faturamento de uma empresa
    var txtFaturamento = document.getElementById("txtFaturamento");
    var btnValidarFaturamento = document.getElementById("btnValidarFaturamento");

    btnValidarFaturamento.addEventListener("click", function() {
        var padrao = /^R\$\d{1,3}((\.\d{1,3})*)?,\d{2}$/;

        impressaoAlert(padrao, txtFaturamento);
    })

    //Matrícula 1
    var txtMatricula1 = document.getElementById("txtMatricula1");
    var btnValidarMat1 = document.getElementById("btnValidarMat1");

    btnValidarMat1.addEventListener("click", function() {
        var padrao = /^IFTM-\d{3}\/\d{3}-[0-9A-Z]{2}$/i;

        impressaoAlert(padrao, txtMatricula1);
    })

    //Matrícula 2
    var txtMatricula2 = document.getElementById("txtMatricula2");
    var btnValidarMat2 = document.getElementById("btnValidarMat2");

    btnValidarMat2.addEventListener("click", function() {
        var padrao = /^MT-\d{2}\.\d{3}-((i|I)(f|F)(t|T)(m|M))$/;

        impressaoAlert(padrao, txtMatricula2);
    })

    //Matrícula 3
    var txtMatricula3 = document.getElementById("txtMatricula3");
    var btnValidarMat3 = document.getElementById("btnValidarMat3");

    btnValidarMat3.addEventListener("click", function() {
        var padrao = /^(M|m)\s?(T|t)-\d{2}\.\d{3}-(i|I)\s?(f|F)\s?(t|T)\s?(m|M)\s((U|u)berlândia Centro|(U|u)berlândia)$/;

        impressaoAlert(padrao, txtMatricula3);
    })


})