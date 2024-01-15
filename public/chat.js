function entrar() {
    const nome = document.getElementById("nomes").value;
    if (!nome) {
        alert("Por favor, preencha o campo nome");
    } else {
        digite_nome(nome);
    }
}

function digite_nome(nome) {
    const nomeReceive = nome;

    let nomesArmazenados = JSON.parse(localStorage.getItem('nomes')) || [];

    nomesArmazenados.push(nomeReceive);

    localStorage.setItem('nomes', JSON.stringify(nomesArmazenados));
    window.location.href = "chat.html";
}

function atualizarListaDeNome() {
    const nomesArmazenados = JSON.parse(localStorage.getItem('nomes')) || [];
    const listaNome = document.getElementById("pessoa");
    listaNome.innerHTML = "";

    nomesArmazenados.forEach(function (nome) {
        const li = document.createElement('li');
        li.textContent = nome;

        const palavraElement = document.createElement("p");
        const bolinhaSpan = document.createElement("span");
        bolinhaSpan.className = "bolinha";
        palavraElement.appendChild(bolinhaSpan);

        const onlineText = document.createElement("span");
        onlineText.textContent = " online";
        onlineText.className = "green-text";
        palavraElement.appendChild(onlineText);

        li.appendChild(palavraElement);
        listaNome.appendChild(li);
    });
}

function digitar_mensagem() {
    const enviarMensagem = document.getElementById('enviarMensagem').value;
    const quadroMensagem = document.getElementById('quadro-mesnsagem');
    const nome = JSON.parse(localStorage.getItem('nomes'))[0];

    if (!nome) {
        alert("Por favor, entre no chat primeiro");
        return;
    }

    const li = document.createElement('li');
    li.className = 'chat-message';

    const nomeDiv = document.createElement('div');
    nomeDiv.className = 'message-text';
    nomeDiv.innerText = nome;

    const textDiv = document.createElement('div');
    textDiv.className = 'message-text';
    textDiv.innerText = enviarMensagem;

    const dateDiv = document.createElement('div');
    dateDiv.innerText = pegarData();
    dateDiv.className = 'message-date';

    li.appendChild(nomeDiv);
    li.appendChild(dateDiv);
    li.appendChild(textDiv);

    quadroMensagem.appendChild(li);
    document.getElementById('enviarMensagem').value = "";
}

function pegarData() {
    let data = new Date();
    let horas = data.getHours();
    let minutos = data.getMinutes();
    let minutosFormatados = minutos.toString().padStart(2, '0');
    let resultado = `${horas}:${minutosFormatados} - ${data.toLocaleDateString()}`;
    return resultado;
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