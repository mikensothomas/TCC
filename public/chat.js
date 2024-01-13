function entrar(){
    const nome = document.getElementById("nome").value;
    if(!nome){
        alert("Por favor preencha o campo nome");
    } else {
        window.location.href = "chat.html";
    }
}

function digitar_mensagem() {
    const quadroMensagem = document.getElementById("quadro-mesnsagem");
    const enviarMensagem = document.getElementById("enviarMensagem").value;

    const li = document.createElement('li');
    li.innerText = enviarMensagem;

    quadroMensagem.appendChild(li);

    document.getElementById("enviarMensagem").value = "";
}
  
function voltar(){
    window.location.href = "index.html";
}

function sair(){
    window.location.href = "chateNome.html";
}