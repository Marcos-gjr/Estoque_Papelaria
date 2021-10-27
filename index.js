import { listarProdutos } from './banco.js'

async function teste() {
  console.log('SELECT * FROM produtos')
  const livros = await listarProdutos()
  console.log(livros)
}
teste()
