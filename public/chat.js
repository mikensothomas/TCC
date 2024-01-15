function entrar() {
    const nomes = document.getElementById("nomes").value;
    if (!nomes) {
        alert("Por favor preencha o campo nome");
    } else {
        digite_nome(nomes);
    }
}

function digite_nome(nomes) {
    const nomeReceive = nomes;

    let nomesArmazenados = JSON.parse(localStorage.getItem('nomes')) || [];

    nomesArmazenados.push(nomeReceive);

    localStorage.setItem('nomes', JSON.stringify(nomesArmazenados));
    window.location.href = "chat.html";
}

function atualizarListaDeNome() {
    const nomesArmazenados = JSON.parse(localStorage.getItem('nomes')) || [];
    const listaNome = document.getElementById("pessoa");
    listaNome.innerHTML = "";
  
    nomesArmazenados.forEach(function (nomes) {
      const li = document.createElement('li');
      li.textContent = nomes;
  
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
  
  document.head.innerHTML += '<style>.green-text { color: green; }</style>';
  document.head.innerHTML += '<style>#pessoa { list-style-type: none; padding: 0; margin: 0; }</style>';
  document.head.innerHTML += '<style>.bolinha { display: inline-block; width: 8px; height: 8px; background-color: green; border-radius: 50%; margin-left: 5px; margin-right: 2px; }</style>';
  


function digitar_mensagem() {
    const enviarMensagem = document.getElementById('enviarMensagem').value;
    const quadroMensagem = document.getElementById('quadro-mesnsagem');
    const li = document.createElement('li');
    li.className = 'chat-message';
        
    const textDiv = document.createElement('div');
    textDiv.className = 'message-text';
    textDiv.innerText = enviarMensagem;
        
    const dateDiv = document.createElement('div');
    dateDiv.innerText = pegarData();
    dateDiv.className = 'message-date';
    
    li.appendChild(dateDiv);
    li.appendChild(textDiv);
    
    quadroMensagem.appendChild(li);
    document.getElementById('enviarMensagem').value = "";
}

function pegarData(){
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
