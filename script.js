const botaoNao = document.getElementById("nao");
const botaoSim = document.getElementById("sim");

let cliquesNao = 0;


// BOTÃO SIM
botaoSim.onclick = function() {
    window.location.href = "index2.html";
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
