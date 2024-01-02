var formulario_login = document.getElementById("formulario_login");

formulario_login.addEventListener("submit", function(event){
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if(email == ""){
        event.preventDefault();
        alert("Por favor preencha o email");
        return false;
    }

    if(senha == ""){
        event.preventDefault();
        alert("Por favor preencha a senha");
        return false;
    }
});