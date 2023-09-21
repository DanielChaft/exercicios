window.onload = function (e) {
    var btnRecuperar = document.getElementById("btnRecuperar");
    var txtEmail = document.getElementById("txtEmail");
    txtEmail.focus();
        
    btnRecuperar.onclick = function (e) {
        e.preventDefault();

        var email = txtEmail.value;
        
        if (email == "") {
            mensagemErro("O campo E-mail é obrigatório!");
        }
        else {
            recuperarSenha(email);
        }
    };

    function mensagemErro(mensagem) {
        var spnErro = document.getElementById("spnErro");
        spnErro.innerText = mensagem;
        spnErro.style.display = "block";

        setTimeout(function () {
            spnErro.style.display = "none";
        }, 5000);

    }

    function recuperarSenha(email) {
        alert("E-mail para recuperação da senha enviado para: " + email);
    }

}