const banco = require("./banco");

async function teste() {
    console.log("SELECT * FROM produtos");
    const livros = await banco.listarProdutos();
    console.log(livros);
}
teste();
