window.onload = function (e) {

    var btnCalcular = document.getElementById("btnCalcular");

    btnCalcular.onclick = function (e) {

        var text1 = document.getElementById("txt1").value;
        var nome = (text1);
        var numero1 = document.getElementById("num1").value;
        var valorHora = parseFloat(numero1);
        var numero2 = document.getElementById("num2").value;
        var horas = parseInt(numero2);

        pagamento(nome, valorHora, horas);
    }

    function pagamento(nome, valorHora, horas) {

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var mensagem = this.responseText;
                alert(mensagem);
            }
        });

        xhr.open("GET", "https://localhost:44305/api/aula8/pagamento?nome=" + nome + "&valorHora=" + valorHora + "&horasTrabalhadas=" + horas);

        xhr.send();

    }
}