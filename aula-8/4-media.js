window.onload = function (e) {

    var btnCalcular = document.getElementById("btnCalcular");

    btnCalcular.onclick = function (e) {

        var text1 = document.getElementById("num1").value;
        var numero1 = parseInt(text1);
        var text2 = document.getElementById("num2").value;
        var numero2 = parseInt(text2);

        media(numero1, numero2);
    }

    function media(valor1, valor2) {

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var mensagem = this.responseText;
                alert(mensagem);
            }
        });

        xhr.open("GET", "https://localhost:44305/api/aula8/media?valor1=" + valor1 + "&valor2=" + valor2);

        xhr.send();
        
    }
}