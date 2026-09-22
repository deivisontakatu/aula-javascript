console.log("=== 07 — Objetos ===");

const aluno = {
    nome: "Carlos",
    idade: 20,
    curso: "ADS",

    apresentar() {
        console.log(`Meu nome é ${this.nome} e curso ${this.curso}.`);
    }
};

console.log(aluno.nome);
console.log(aluno.curso);

aluno.apresentar();
