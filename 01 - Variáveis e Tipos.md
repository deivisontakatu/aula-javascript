# 🟨 JavaScript — Variáveis e Tipos

## 🎯 Objetivo

Neste tutorial, vamos aprender a declarar variáveis e trabalhar com os principais tipos de dados do JavaScript.

## 🗺️ Conteúdo

| # | Conteúdo | Conceito |
|---|---|---|
| 1️⃣ | Variáveis | `let` e `const` |
| 2️⃣ | String | Texto |
| 3️⃣ | Number | Números |
| 4️⃣ | Boolean | Verdadeiro/Falso |
| 5️⃣ | Undefined | Valor não definido |
| 6️⃣ | Null | Ausência de valor |
| 7️⃣ | typeof | Verificar o tipo |
| 8️⃣ | Template String | Interpolação |

---

# 1️⃣ Variáveis

```javascript
const nome = "João";
let idade = 20;
```

`const` é utilizado quando a variável não será reatribuída. `let` permite alterar seu valor.

# 2️⃣ Strings

```javascript
const nome = "Maria";
console.log(nome);
```

# 3️⃣ Numbers

```javascript
const idade = 20;
const altura = 1.78;
```

# 4️⃣ Boolean

```javascript
const estudante = true;
const aprovado = false;
```

# 5️⃣ Undefined

```javascript
let cidade;
console.log(cidade);
```

# 6️⃣ Null

```javascript
const endereco = null;
```

# 7️⃣ typeof

```javascript
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof estudante);
```

# 8️⃣ Template String

```javascript
const nome = "Carlos";
const idade = 20;

console.log(`Olá, ${nome}! Você tem ${idade} anos.`);
```

## 🧪 Exercício

Crie variáveis para representar nome, idade, curso e situação acadêmica de um aluno.

## 🎯 Desafio

Monte uma mensagem utilizando template string com pelo menos quatro informações.
