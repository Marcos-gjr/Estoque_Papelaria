import mysql from 'mysql2/promise'

// Função para a conexão com o banco de dados
// Function for database connection
async function conectar() {
  /* if (global.minhaConexao && global.minhaConexao.state != 'disconected')
  {
    return global.minhaConexao
  } */

  // mysql://usuario:senha@servidor:porta/nomeBanco
  const conexao = await mysql.createConnection('mysql://root:@localhost:3306/damamajo')
  global.minhaConexao = conexao
  return conexao
}

// Função para achar usuario e senha
// Function to find username and password
export async function buscarUsuario(usuario, senha) {
  const conexao = await conectar()
  const sql = 'select * from usuario where nome=? and senha=?;'
  const [linhas] = await conexao.query(sql, [usuario, senha])
  return linhas
}

// Função para listagem de produtos
// Product listing function
export async function listarProdutos() {
  const conexao = await conectar()
  const sql = 'select * from produtos;'
  const [produtos] = await conexao.query(sql)
  return produtos
}

// Função para procurar o produto e suas informações
// Function to search for the product and its information
export async function recuperarProduto(id) {
  const conexao = await conectar()
  const sql = 'select * from produtos where codigo=?;'
  const [produto] = await conexao.query(sql, [id])

  if (produto && produto.length > 0) return produto[0]
  else return {}
}

export async function atualizarProduto(nome, /* quantidade, */ descricao, id) {
  const conexao = await conectar()
  /* quantidade=?, */
  const sql = 'update produtos set nome=?,  descricao=? where codigo=?;'
  await conexao.query(sql, [nome, /* quantidade, */ descricao, id])
}

export async function excluirProduto(id) {
  const conexao = await conectar()
  const sql = 'delete from produtos where codigo=?;'
  await conexao.query(sql, [id])
}

// (ini) função para incerir um novo produto
// function to start a new product
/*async function inserirProduto(produto)
{
    const conexao = await conectar()
    const sql = 'insert into livros (nome, quantidade, descricao) values (?,?,?);'
    return await conexao.query(sql, [produto.nome, produto.qtd, produto.des])
}
*/
