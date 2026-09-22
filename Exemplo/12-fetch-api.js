console.log("=== 12 — Fetch e APIs ===");

async function carregarDados() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Erro na requisição");
        }

        const dados = await response.json();

        console.log("Dados recebidos:", dados);
    } catch (erro) {
        console.error("Erro:", erro);
    }
}

carregarDados();
