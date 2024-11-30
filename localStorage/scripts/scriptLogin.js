var txtUser = document.getElementById("txtUser");
var txtPwd = document.getElementById("txtPwd");
var btnEntrar = document.getElementById("btnEntrar");

btnEntrar.addEventListener("click", function(){
    var users = localStorage.getItem("users");
    users = JSON.parse(users);

    if(!users){
        alert("Nenhum usuário cadastrado.")
    }else{
        if(checkUsrAndPwd(users, txtUser.value, txtPwd.value)){
            window.location.href = "./jogoMenu.html"
        }else{
            exibeErro(users, txtUser.value, txtPwd.value);
        }
    }

    
});

function checkUsrAndPwd (vetUsers, user, password) {
    for(var i = 0; i < vetUsers.length; i++){
        if(vetUsers[i].username == user && vetUsers[i].password == password) return true; //encontrou usuário igual
    return false; //não encontrou igual
    }
}

function exibeErro (vetUsers, user, password){
    for(var i = 0; i < vetUsers.length; i++){
        if(vetUsers[i].username != user){
            alert("O email não existe.");
        }else if(vetUsers[i].username == user && vetUsers[i].password != password){
            alert("Senha incorreta.");
        }
    }
}