function entrar(){
    const nome = document.getElementById("nome").value;
    if(!nome){
        alert("Por favor preencha o campo nome");
    } else {
        window.location.href = "chat.html";
        digite_nome();
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

function digite_nome() {
    const nomeElement = document.getElementById("nome");
    const people = document.getElementById("poeple");
  
    const nome = nomeElement.value;
  
    const li = document.createElement('li');
    li.innerText = nome;
  
    people.appendChild(li);
}
  

function voltar(){
    window.location.href = "index.html";
}

function sair(){
    window.location.href = "chateNome.html";
}