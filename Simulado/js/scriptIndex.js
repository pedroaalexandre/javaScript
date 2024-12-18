window.addEventListener("DOMContentLoaded", function(){

    var txtNome = document.getElementById("txtNome");
    var txtIdade = document.getElementById("txtIdade");
    var select = document.getElementById("select");
    var selectedValue = "0";
    var btnForm = document.getElementById("btnForm");

    select.addEventListener("change", function(){
        selectedValue = select.value;
    });

    btnForm.addEventListener("click", function() {
        if(txtNome.value == "") {
            alert("Digite o seu nome.");
        }else if(txtIdade.value == ""){
            alert("Digite sua idade.");
        }else if(txtIdade.value < 1 || txtIdade.value > 130){
            alert("Idade inválida. Digite uma idade entre 1 e 130.");
        }else if(selectedValue == "0"){
            alert("Selecione uma opção.");
        }else{

            var newUser = {username: txtNome.value, idade: txtIdade.value, carro: select.value};

            localStorage.setItem("users", JSON.stringify(newUser));

            console.log(newUser);
            console.log(localStorage.getItem("users"));

            window.open("aguarde.html", "_self");
        }
    });

    

});