console.log("=== 08 — DOM ===");

const titulo = document.querySelector("#titulo");
const mensagem = document.querySelector("#mensagem");
const botao = document.querySelector("#botao");

botao.addEventListener("click", () => {
    titulo.textContent = "Título alterado!";
    mensagem.textContent = "O conteúdo foi alterado pelo JavaScript.";
});
