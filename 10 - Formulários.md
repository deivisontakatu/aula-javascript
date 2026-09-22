# 🟦 JavaScript — Formulários

## 🎯 Objetivo

Capturar e processar dados enviados pelo usuário.

## Exemplo

```html
<form id="formulario">
    <input id="nome" type="text">
    <button type="submit">Enviar</button>
</form>
```

## Capturando o submit

```javascript
const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.querySelector("#nome").value;

    console.log(nome);
});
```

## 🧪 Exercício

Crie um formulário com nome, e-mail e curso.

## 🎯 Desafio

Mostre os dados enviados pelo usuário em um card na própria página.
