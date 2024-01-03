function validate() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarsenha = document.getElementById('conferirSenha').value;
    const btnSalvar = document.getElementById('btnSalvar');

    if (!email || !senha || !confirmarsenha || !validateEmail(email) || senha !== confirmarsenha) {
        btnSalvar.disabled = true;
    } else if(senha.length < 6){
        alert("A senha deve ter pelo menos 6 caracteres");
        btnSalvar.disabled = true;
    } else {
        btnSalvar.disabled = false;
    }
}

function validar(){
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const btnEntrar = document.getElementById("btnEntrar");

    if(!email || !senha || !validateEmail(email)){
        btnEntrar.disabled = true;
    } else if(senha.length < 6){
        alert("A senha deve ter pelo menos 6 caracteres");
        btnEntrar.disabled = true;
    } else {
        btnEntrar.disabled = false;
    }
}