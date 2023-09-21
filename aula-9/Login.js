window.onload = function (e) {
    var btnLogin = document.getElementById("btnLogin");
    var txtEmail = document.getElementById("txtEmail");
    var txtPassword = document.getElementById("txtPassword");
    txtEmail.focus();

    btnLogin.onclick = function (e) {

        e.preventDefault();

        var email = txtEmail.value;
        var senha = txtPassword.value;

        if (email == "") {
            mensagemErro("O campo E-mail é obrigatório!");
        }
        else if (senha == "") {
            mensagemErro("O campo Senha é obrigatório");
        }
        else {
            realizarLogin(email, senha);
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

    function realizarLogin(email, senha) {

        alert("O Login foi realizado para o usuário: " + email);
    }
}