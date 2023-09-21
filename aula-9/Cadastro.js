window.onload = function (e) {

    var cadastrar = document.getElementById("btnCadastrar");
    var txtNome = document.getElementById("txtNome");
    var txtSobrenome = document.getElementById("txtSobrenome");
    var txtEmail = document.getElementById("txtEmail");
    var txtTelefone = document.getElementById("txtTelefone");
    var slcGenero = document.getElementById("slcGenero");
    var txtSenha = document.getElementById("txtSenha");

    txtNome.focus();

    btnCadastro.onclick = function (e) {

        e.preventDefault();

        var nome = txtNome.value;
        var sobrenome = txtSobrenome.value;
        var email = txtEmail.value;
        var telefone = txtTelefone.value;
        var genero = slcGenero.value;
        var senha = txtSenha.value;

        if (nome == "") {
            mensagemErro("Nome obrigatório!");
        }
        else if (sobrenome == "") {
            mensagemErro("Sobrenome obrigatório!");
        }
        else if (email == "") {
            mensagemErro("E-mail obrigatório!");
        }
        else if (telefone == "") {
            mensagemErro("Telefone obrigatório!");
        }
        else if (senha == "") {
            mensagemErro("Senha obrigatório!");
        }
        else {
            cadastrarDados(nome, sobrenome, email, telefone, genero, senha);
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

    function cadastrarDados(nome, sobrenome, email, telefone, genero, senha) {

        alert(nome + " seu cadastro foi realizado com sucesso!");

    }
}