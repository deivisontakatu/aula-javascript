# 🟨 JavaScript — Condicionais

## 🎯 Objetivo

Utilizar estruturas condicionais para tomar decisões no programa.

## 🗺️ Conteúdo

| # | Conteúdo |
|---|---|
| 1️⃣ | `if` |
| 2️⃣ | `else` |
| 3️⃣ | `else if` |
| 4️⃣ | `switch` |
| 5️⃣ | Operador ternário |

## 1️⃣ if e else

```javascript
const idade = 20;

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}
```

## 2️⃣ else if

```javascript
const nota = 8;

if (nota >= 9) {
    console.log("Excelente");
} else if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}
```

## 3️⃣ switch

```javascript
const dia = 2;

switch (dia) {
    case 1:
        console.log("Segunda");
        break;
    case 2:
        console.log("Terça");
        break;
    default:
        console.log("Outro dia");
}
```

## 4️⃣ Ternário

```javascript
const resultado = nota >= 7 ? "Aprovado" : "Reprovado";
```

## 🧪 Exercício

Crie um programa que receba uma nota e informe a situação do aluno.

## 🎯 Desafio

Crie uma classificação com pelo menos três faixas de resultado.
