# 🟨 JavaScript — Arrays

## 🎯 Objetivo

Armazenar e manipular conjuntos de valores.

## 🗺️ Conteúdo

| # | Conteúdo |
|---|---|
| 1️⃣ | Criação |
| 2️⃣ | `length` |
| 3️⃣ | `push` e `pop` |
| 4️⃣ | `shift` e `unshift` |
| 5️⃣ | `forEach` |
| 6️⃣ | `map` |
| 7️⃣ | `filter` |
| 8️⃣ | `find` |
| 9️⃣ | `reduce` |

## Exemplo

```javascript
const alunos = ["Ana", "Carlos", "João"];

console.log(alunos.length);
```

## Métodos

```javascript
alunos.push("Maria");
alunos.pop();
```

## filter

```javascript
const notas = [7, 8, 5, 9, 10];

const aprovados = notas.filter(nota => nota >= 7);

console.log(aprovados);
```

## 🧪 Exercício

Crie um array com cinco alunos e percorra todos os nomes.

## 🎯 Desafio

Crie um array de notas e gere um novo array contendo apenas as notas maiores ou iguais a 7.
