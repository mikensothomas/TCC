function logOut() {
    firebase.auth().signOut().then(function() {
        showLoading();
        window.location.href = "index.html";
      }).catch(function(error) {
        alert("Erro ao sair");
    });
}