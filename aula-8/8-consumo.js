window.onload = function (e) {

    var btnConsumo = document.getElementById("btnConsumo");

    btnConsumo.onclick = function (e) {

        var text1 = document.getElementById("num1").value;
        var distancia = parseInt(text1);
        var text2 = document.getElementById("num2").value;
        var combustivel = parseInt(text2);

        consumo(distancia, combustivel);
    }

    function consumo(distancia, combustivel) {

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var mensagem = this.responseText;
                alert(mensagem);
            }
        });

        xhr.open("GET", "https://localhost:44305/api/aula8/consumo?distancia=" + distancia + "&totalAbastecido=" + combustivel);

        xhr.send();
        
    }
}