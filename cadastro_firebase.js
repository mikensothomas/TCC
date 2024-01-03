function salvar(){
    const email = form.email().value;
    const senha = form.senha().value;
    firebase.auth().createUserWithEmailAndPassword(
        email, password
    ).then(() => {
        window.location.href = "login.html";
    }).catch(error => {
        alert(getErrorMessge(error));
    })
}

function pegarErro(error){
    return error.message;
}

const form = {
    email: () => document.getElementById("email").value,
    senha: () => document.getElementById("senha").value,
    conferirSenha: () => document.getElementById("conferirSenha").value
}