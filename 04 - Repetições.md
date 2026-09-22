# 🟨 JavaScript — Repetições

## 🎯 Objetivo

Aprender a repetir instruções utilizando estruturas de repetição.

## 🗺️ Conteúdo

| # | Conteúdo |
|---|---|
| 1️⃣ | `for` |
| 2️⃣ | `while` |
| 3️⃣ | `do...while` |
| 4️⃣ | `break` |
| 5️⃣ | `continue` |

## 1️⃣ for

```javascript
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

## 2️⃣ while

```javascript
let contador = 1;

while (contador <= 5) {
    console.log(contador);
    contador++;
}
```

## 3️⃣ do...while

```javascript
let numero = 1;

do {
    console.log(numero);
    numero++;
} while (numero <= 5);
```

## 4️⃣ break

```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) break;
    console.log(i);
}
```

## 5️⃣ continue

```javascript
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) continue;
    console.log(i);
}
```

## 🧪 Exercício

Exiba os números de 1 a 20 e identifique os números pares.

## 🎯 Desafio

Calcule a soma dos números de 1 a 100.
