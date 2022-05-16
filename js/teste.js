var titulo = document.querySelector("h1");
titulo.onmouseenter = esconderSubtitulo;
titulo.onmouseleave = aparecerSubtitulo;

var porcentagem = document.querySelector("#porcentagem");
porcentagem.oninput = mostrarPorcentagem;

function mudarEstilo() {
    porcentagem.style.height = "100px";
}

function mostrarPorcentagem() {
    var valorPorcentagem = document.querySelector("#valorPorcentagem");
    var valorAtual = porcentagem.value;
    valorPorcentagem.textContent = porcentagem.value;

    var mensagem = document.querySelector("#mensagem");

    var loucura = document.querySelector("#loucura")

    var loucura = document.querySelector("#doideira")

    var loucura = document.querySelector("#ideal")

    if (valorAtual > 70) {
        mensagem.style.display = "inline-block";

    } else {
        mensagem.style.display = "none";
    }
    if (valorAtual > 84) {
        loucura.style.display = "inline-block";
        mensagem.style.display = "none";

    } else {
        loucura.style.display = "none";
        mensagem.style.display = "inline-block";

    }
    if (valorAtual < 21) {
        doideira.style.display = "inline-block";
        mensagem.style.display = "none";

    } else {
        doideira.style.display = "none";
        mensagem.style.display = "inline-block";
}

function esconderSubtitulo() {
    var subtitulo = document.querySelector("h2");
    subtitulo.style.display = "none";
}
function aparecerSubtitulo() {
    var subtitulo = document.querySelector("h2");
    subtitulo.style.display = "block";
}
}
