# 🟦 JavaScript — Eventos

## 🎯 Objetivo

Responder às ações realizadas pelo usuário.

## 🗺️ Conteúdo

| # | Evento |
|---|---|
| 1️⃣ | `click` |
| 2️⃣ | `input` |
| 3️⃣ | `change` |
| 4️⃣ | `submit` |
| 5️⃣ | `keydown` |
| 6️⃣ | `mouseover` |

## click

```javascript
const botao = document.querySelector("#botao");

botao.addEventListener("click", () => {
    console.log("Botão clicado!");
});
```

## input

```javascript
const campo = document.querySelector("#nome");

campo.addEventListener("input", () => {
    console.log(campo.value);
});
```

## 🧪 Exercício

Crie um botão que altere uma mensagem na tela.

## 🎯 Desafio

Crie um botão que alterne uma classe CSS utilizando `classList.toggle()`.
