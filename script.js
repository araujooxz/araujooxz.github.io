const botaoNao = document.getElementById("nao");
const botaoSim = document.getElementById("sim");

let cliquesNao = 0;


// BOTÃO SIM
botaoSim.onclick = function() {

    document.body.style.transition = "opacity 0.6s ease";
    document.body.style.opacity = "0";

    setTimeout(function() {
        window.location.href = "index2.html";
    }, 600);

};


// BOTÃO NÃO
botaoNao.onmouseover = function() {

    cliquesNao++;

    // NO 10º CLIQUE, O BOTÃO SOME
    if (cliquesNao >= 10) {
        botaoNao.style.display = "none";
        return;
    }

    const largura = window.innerWidth - botaoNao.offsetWidth;
    const altura = window.innerHeight - botaoNao.offsetHeight;

    const x = Math.random() * largura;
    const y = Math.random() * altura;

    botaoNao.style.position = "fixed";
    botaoNao.style.left = x + "px";
    botaoNao.style.top = y + "px";
};
