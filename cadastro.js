var formulario_cadastro = document.getElementById("formulario_cadastro");

formulario_cadastro.addEventListener("submit", function(event){
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const conferirSenha = document.getElementById("conferirSenha").value;

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

    if(conferirSenha == ""){
        event.preventDefault();
        alert("Por favor preencha o campo conferir senha");
        return false;
    }

    if(senha != conferirSenha){
        alert("O campo senha tem que ser igual ao campo conferir a senha");
    }
});