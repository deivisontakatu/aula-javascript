# 🟨 JavaScript — Objetos

## 🎯 Objetivo

Representar entidades utilizando propriedades e métodos.

## 🗺️ Conteúdo

| # | Conteúdo |
|---|---|
| 1️⃣ | Criando objetos |
| 2️⃣ | Propriedades |
| 3️⃣ | Acesso |
| 4️⃣ | Métodos |
| 5️⃣ | `this` |

## Exemplo

```javascript
const aluno = {
    nome: "Carlos",
    idade: 20,
    curso: "ADS"
};
```

## Acesso

```javascript
console.log(aluno.nome);
console.log(aluno.curso);
```

## Métodos

```javascript
const aluno = {
    nome: "Carlos",

    apresentar() {
        console.log(`Meu nome é ${this.nome}`);
    }
};
```

## 🧪 Exercício

Crie um objeto representando um produto com nome, preço e quantidade.

## 🎯 Desafio

Adicione um método que calcule o valor total do produto.
