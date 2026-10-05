// Seleciona elementos do HTML
const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");

// Executa quando o botão for clicado
botao.addEventListener("click", function () {
    mensagem.textContent = "Olá! O JavaScript alterou o HTML.";
});


// Seleciona os elementos do cálculo
const calcular = document.getElementById("calcular");
const numero = document.getElementById("numero");
const resultado = document.getElementById("resultado");

// Executa o cálculo
calcular.addEventListener("click", function () {

    const valor = Number(numero.value);

    const dobro = valor * 2;

    resultado.textContent = "O dobro é: " + dobro;
});