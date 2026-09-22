console.log("=== 11 — LocalStorage ===");

const usuario = {
    nome: "Carlos",
    curso: "ADS"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

const usuarioSalvo = JSON.parse(
    localStorage.getItem("usuario")
);

console.log("Usuário salvo:", usuarioSalvo);
