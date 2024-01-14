function entrar() {
    const nomes = document.getElementById("nomes").value;
    if (!nomes) {
        alert("Por favor preencha o campo nome");
    } else {
        digite_nome(nomes);
        // Restante do seu código...
    }
}

function digite_nome(nomes) {
    const nomeReceive = nomes;

    let nomesArmazenados = JSON.parse(localStorage.getItem('nomes')) || [];

    nomesArmazenados.push(nomeReceive);

    localStorage.setItem('nomes', JSON.stringify(nomesArmazenados));
    window.location.href = "chat.html";
}

function exibir_pessoas_online() {
    let nomesArmazenados = JSON.parse(localStorage.getItem('nomes')) || [];

    console.log("Pessoas Online:", nomesArmazenados);
}

function atualizarListaDeNome() {
    const nomesArmazenados = JSON.parse(localStorage.getItem('nomes')) || [];
    const listaNome = document.getElementById("pessoa");
    listaNome.innerHTML = "";

    nomesArmazenados.forEach(function (nomes) {
        const li = document.createElement('li');
        li.textContent = nomes;
        listaNome.appendChild(li);
    });
}

function digitar_mensagem() {
    const quadroMensagem = document.getElementById("quadro-mesnsagem");
    const enviarMensagem = document.getElementById("enviarMensagem").value;

    const li = document.createElement('li');
    li.innerText = enviarMensagem;

    quadroMensagem.appendChild(li);

    document.getElementById("enviarMensagem").value = "";
}

function voltar() {
    window.location.href = "index.html";
}

function sair() {
    window.location.href = "chateNome.html";
}

document.addEventListener('DOMContentLoaded', function () {
    atualizarListaDeNome();
});
