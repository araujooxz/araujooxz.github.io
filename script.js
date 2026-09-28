const botaoNao = document.getElementById("nao");
const botaoSim = document.getElementById("sim");


// BOTÃO SIM
botaoSim.addEventListener("click", function() {

    window.location.href = "index2.html";

});


// BOTÃO NÃO
botaoNao.addEventListener("mouseover", function() {

    const largura = window.innerWidth - botaoNao.offsetWidth;
    const altura = window.innerHeight - botaoNao.offsetHeight;

    const x = Math.random() * largura;
    const y = Math.random() * altura;

    botaoNao.style.position = "fixed";

    botaoNao.style.left = x + "px";
    botaoNao.style.top = y + "px";

});