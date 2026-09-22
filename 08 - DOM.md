# 🟦 JavaScript — DOM

## 🎯 Objetivo

Manipular elementos HTML utilizando JavaScript.

## 🗺️ Conteúdo

| # | Conteúdo |
|---|---|
| 1️⃣ | `document` |
| 2️⃣ | `querySelector` |
| 3️⃣ | `querySelectorAll` |
| 4️⃣ | `textContent` |
| 5️⃣ | `value` |
| 6️⃣ | `classList` |
| 7️⃣ | Criar elementos |

## Selecionar elemento

```javascript
const titulo = document.querySelector("#titulo");
```

## Alterar texto

```javascript
titulo.textContent = "Olá, JavaScript!";
```

## Alterar classe

```javascript
titulo.classList.add("destaque");
```

## Criar elemento

```javascript
const item = document.createElement("li");
item.textContent = "Novo item";

document.querySelector("#lista").append(item);
```

## 🧪 Exercício

Altere o texto de um título e adicione um novo item em uma lista.

## 🎯 Desafio

Crie dinamicamente três elementos HTML utilizando JavaScript.
