# 🟪 JavaScript — Fetch e APIs

## 🎯 Objetivo

Consumir dados de APIs utilizando `fetch` e `async/await`.

## Fetch

```javascript
fetch("https://api.exemplo.com/alunos")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
```

## async/await

```javascript
async function carregarDados() {
    const response = await fetch(
        "https://api.exemplo.com/alunos"
    );

    const dados = await response.json();

    console.log(dados);
}
```

## Tratamento de erros

```javascript
async function carregarDados() {
    try {
        const response = await fetch(
            "https://api.exemplo.com/alunos"
        );

        if (!response.ok) {
            throw new Error("Erro na requisição");
        }

        const dados = await response.json();

        console.log(dados);
    } catch (erro) {
        console.error(erro);
    }
}
```

## 🧪 Exercício

Consuma uma API pública e exiba os dados no console.

## 🎯 Desafio

Consuma uma API e apresente os resultados em cards no HTML.
