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
  
  document.head.innerHTML += '<style>.green-text { color: green; }</style>';
  document.head.innerHTML += '<style>#pessoa { list-style-type: none; padding: 0; margin: 0; }</style>';
  document.head.innerHTML += '<style>.bolinha { display: inline-block; width: 8px; height: 8px; background-color: green; border-radius: 50%; margin-left: 5px; margin-right: 2px; }</style>';
  


function digitar_mensagem() {
    const enviarMensagem = document.getElementById('enviarMensagem').value;
    const quadroMensagem = document.getElementById('quadro-mesnsagem');
    const li = document.createElement('li');
    li.className = 'chat-message'; // Adicione a classe 'chat-message'
        
    const textDiv = document.createElement('div');
    textDiv.className = 'message-text';
    textDiv.innerText = enviarMensagem;
        
    const dateDiv = document.createElement('div');
    dateDiv.innerText = pegarDataAtual();
    dateDiv.className = 'message-date';
    
    li.appendChild(dateDiv);
    li.appendChild(textDiv);
    
    quadroMensagem.appendChild(li);
    document.getElementById('enviarMensagem').value = "";
}

function pegarDataAtual() {
    const data = new Date();
    return `${data.getHours()}:${data.getMinutes()} - ${data.toLocaleDateString()}`;
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
