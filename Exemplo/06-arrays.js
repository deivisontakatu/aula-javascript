console.log("=== 06 — Arrays ===");

const notas = [7, 8, 5, 9, 10];

console.log("Notas:", notas);
console.log("Quantidade:", notas.length);

notas.forEach((nota, indice) => {
    console.log(indice, nota);
});

const aprovados = notas.filter(nota => nota >= 7);

console.log("Aprovados:", aprovados);
