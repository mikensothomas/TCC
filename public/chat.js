function entrar(){
    const nome = document.getElementById("nome").value;
    if(!nome){
        alert("Por favor preencha o campo nome");
    } else {
        window.location.href = "chat.html";
    }
}

function voltar(){
    window.location.href = "index.html";
}

function sair(){
    window.location.href = "chateNome.html";
}