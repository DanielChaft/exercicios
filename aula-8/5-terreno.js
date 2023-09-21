window.onload = function (e) {

    var btnCalcular = document.getElementById("btnCalcular");

    btnCalcular.onclick = function (e) {

        var text1 = document.getElementById("num1").value;
        var numero1 = parseInt(text1);
        var text2 = document.getElementById("num2").value;
        var numero2 = parseInt(text2);
        var text3 = document.getElementById("num3").value;
        var valor_metro = parseFloat(text3);

        terreno(numero1, numero2, valor_metro);
    }

    function terreno(valor1, valor2, valor3) {

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var mensagem = this.responseText;
                alert(mensagem);
            }
        });

        xhr.open("GET", "https://localhost:44305/api/aula8/terreno?largura=" + valor1 + "&comprimento=" + valor2 + "&valorM2=" + valor3);

        xhr.send();

    }
}