window.onload = function (e) {

    var btnCalcular = document.getElementById("btnCalcular");

    btnCalcular.onclick = function (e) {

        var text1 = document.getElementById("num1").value;
        var preco = parseInt(text1);
        var text2 = document.getElementById("num2").value;
        var produto = parseInt(text2);
        var text3 = document.getElementById("num3").value;
        var valorPago = parseFloat(text3);

        terreno(preco, produto, valorPago);
    }

    function terreno(preco, produto, valorPago) {

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var mensagem = this.responseText;
                alert(mensagem);
            }
        });

        xhr.open("GET", "https://localhost:44305/api/aula8/troco?precoProd=" + preco + "&qtdProduto=" + produto + "&valorPago=" + valorPago);

        xhr.send();

    }
}