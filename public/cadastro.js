/*firebase.auth().onAuthStateChanged(function(user){
    if(user){
        window.location.href = "home.html";
    }
})*/

function getErrorMessage(error){
    if(error.code == "auth/email-already-in-use"){
        return "Este email já está em uso";
    }
}

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

function cadastrar(){

    const email = form.email().value;
    const senha = form.senha().value;
    const conferirSenha = form.conferirSenha().value;

    
    showLoading();
    firebase.auth().createUserWithEmailAndPassword(
        form.email().value, form.senha().value
    ).then(() => {
        window.location.href = "index.html";
    }).catch(error => {
        alert(getErrorMessage(error));
    });

    email = "";
    senha = "";
    conferirSenha = "";
}

function back(){
    window.location.href = "index.html";
}

const form = {
    email: () => document.getElementById('email'),
    senha: () => document.getElementById('senha'),
    conferirSenha: () => document.getElementById('conferirSenha'),
} 