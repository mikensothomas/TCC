function pegarErroMensagem(error){
    if(error.code == "auth/user-not-found"){
        return "Email não encntrado";
    }
    if(error.code == "auth/wrong-password"){
        return "Senha inválida";
    }
    return error.message;
}

function validar(){
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const btnEntrar = document.getElementById("btnEntrar");
    const redefiniSenha = document.getElementById("redefiniSenha");

    if(!email || !senha || !validateEmail(email)){
        btnEntrar.disabled = true;
    } else {
        btnEntrar.disabled = false;
    }

    if(!email && !validateEmail){
        redefiniSenha.disabled = true;
    } else {
        redefiniSenha.disabled = false
    }

    if(!email){
        document.getElementById("email_obrigatorio").style.display = "block";
        btnEntrar.disabled = true;
        redefiniSenha.disabled = true;
    } else {
        document.getElementById("email_obrigatorio").style.display = "none";
    }

    if(email && !validateEmail(email)){
        document.getElementById("emai_invalido").style.display = "block";
        btnEntrar.disabled = true;
    } else {
        document.getElementById("emai_invalido").style.display = "none";
    }

    if(!senha){
        document.getElementById("senha_obrigatorio").style.display = "block";
        btnEntrar.disabled = true;
    } else {
        document.getElementById("senha_obrigatorio").style.display = "none";
    }

    if(senha && senha.length < 6){
        document.getElementById("seisCaracteres").style.display = "block";
        btnEntrar.disabled = true;
    } else {
        document.getElementById("seisCaracteres").style.display = "none";
    }
}

function recoverPassword() {
    showLoading();
    firebase.auth().sendPasswordResetEmail(form.email().value).then(() => {
        alert('Por favor verifique teu email');
    }).catch(error => {
        hideLoading();
        alert("Email não existe");
    });

    form.email().value = "";
}



function login(){
    showLoading();
    firebase.auth().signInWithEmailAndPassword(form.email().value, form.senha().value)
    .then(response => {
        window.location.href = "home/home.html";
    })
    .catch(error => {
        alert('Email ou senha inválido');
    });
    hidLoading();
    form.email().value = "";
    form.senha().value = "";
}

const form = {
    email: () => document.getElementById('email'),
    senha: () => document.getElementById('senha'),
} 