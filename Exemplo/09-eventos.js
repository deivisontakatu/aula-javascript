console.log("=== 09 — Eventos ===");

const botao = document.querySelector("#contador");
const valor = document.querySelector("#valor-contador");

let contador = 0;

botao.addEventListener("click", () => {
    contador++;
    valor.textContent = contador;
});
