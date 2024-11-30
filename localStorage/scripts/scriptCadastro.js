var txtUser = document.getElementById("txtUser");
var txtPwd = document.getElementById("txtPwd");
var btnCadastrar = document.getElementById("btnCadastrar");

btnCadastrar.addEventListener("click", function(){
    var newUser = {username: txtUser.value, password:txtPwd.value};
    var users = localStorage.getItem("users");

    //users vazio
    if(!users){
        localStorage.setItem("users", JSON.stringify([newUser]));
        alert("Usuário cadastrado com sucesso!");

    //users existente
    }else{
        users = JSON.parse(users);      //transformar minha key de String para object novamente
        if(checkUsers(users, newUser.username)){
            alert("Usuário existente. Tente outro!");
        }else{
            users.push(newUser);     //inserir o novo object no vetor
            localStorage.setItem("users", JSON.stringify(users));   //tranformar users novamente em String
            alert("Usuário cadastrado com sucesso.");
            window.location.href = "index.html";
        }
    }
});

function checkUsers (vetUsers, user) {
    for(var i = 0; i < vetUsers.length; i++){
        if(vetUsers[i].username == user) return true; //encontrou usuário igual
    return false; //não encontrou igual
    }
}