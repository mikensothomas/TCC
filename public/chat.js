function entrar(){
    const nomes = document.getElementById("nomes").value;
    if(!nomes){
        alert("Por favor preencha o campo nome");
    } else {
        const nomeArmazenado = JSON.parse(localStorage.getItem('nomes')) || [];
        nomeArmazenado.push(nomes);
        localStorage.setItem('nomes', JSON.stringify(nomeArmazenado));
        document.getElementById("nomes").value = "";
        atualizarListaDeNome();
        window.location.href = "chat.html";
    }
}

function atualizarListaDeNome(){
    const nomesArmazenados = JSON.parse(localStorage.getItem('nomes')) || [];
    const listaNome = document.getElementById("pessoa");
    listaNome.innerHTML = "";

    nomesArmazenados.forEach(function(nomes) {
        const li = document.createElement('li');
        li.textContent = nomes;
        listaNome.appendChild(li);
    });
}

atualizarListaDeNome();

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