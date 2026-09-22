console.log("=== 10 — Formulários ===");

const formulario = document.querySelector("#formulario");
const campoNome = document.querySelector("#nome");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = campoNome.value.trim();

    resultado.textContent = `Olá, ${nome}! Formulário enviado.`;
});
