# 🟪 JavaScript — LocalStorage

## 🎯 Objetivo

Armazenar informações no navegador.

## Salvar

```javascript
localStorage.setItem("nome", "Carlos");
```

## Recuperar

```javascript
const nome = localStorage.getItem("nome");
console.log(nome);
```

## Remover

```javascript
localStorage.removeItem("nome");
```

## Objetos

```javascript
const aluno = {
    nome: "Carlos",
    idade: 20
};

localStorage.setItem(
    "aluno",
    JSON.stringify(aluno)
);
```

Recuperação:

```javascript
const alunoSalvo = JSON.parse(
    localStorage.getItem("aluno")
);
```

## 🧪 Exercício

Salve o nome de um usuário no LocalStorage e exiba-o ao recarregar a página.

## 🎯 Desafio

Crie uma lista de tarefas persistente.
