function validate() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarsenha = document.getElementById('conferirSenha').value;
    const btnSalvar = document.getElementById('btnSalvar');

    if (!email || !senha || !confirmarsenha || !validateEmail(email) || senha !== confirmarsenha) {
        btnSalvar.disabled = true;
    } else {
        btnSalvar.disabled = false;
    }

    if(!email){
        document.getElementById("email_obrigatorio").style.display = "block";
        btnSalvar.disabled = true;
    } else {
        document.getElementById("email_obrigatorio").style.display = "none";
    }

    if(email && !validateEmail(email)){
        document.getElementById("emai_invalido").style.display = "block";
        btnSalvar.disabled = true;
    } else {
        document.getElementById("emai_invalido").style.display = "none";
    }

    if(confirmarsenha && senha !== confirmarsenha){
        document.getElementById("senhaEconfirmaSenha").style.display = "block";
        btnSalvar.disabled = true;
    } else {
        document.getElementById("senhaEconfirmaSenha").style.display = "none";
    }

    if(senha && senha.length < 6){
        document.getElementById("seisCaracteres").style.display = "block";
        btnSalvar.disabled = true;
    } else {
        document.getElementById("seisCaracteres").style.display = "none";
    }
}

function validar(){
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const btnEntrar = document.getElementById("btnEntrar");

    if(!email || !senha || !validateEmail(email)){
        btnEntrar.disabled = true;
    } else {
        btnEntrar.disabled = false;
    }

    if(!email){
        document.getElementById("email_obrigatorio").style.display = "block";
        btnEntrar.disabled = true;
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

function login(){

    firebase.auth().signInWithEmailAndPassword(form.email().value, form.senha().value)
    .then(response => {
        window.location.href = "home/home.html";
    })
    .catch(error => {
        console.log('error', error)
    });
}

function cadastrar(){
    window.location.href = "login.html";
}

const form = {
    email: () => document.getElementById("email"),
    senha: () => document.getElementById("senha"),
} 