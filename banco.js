import mysql from 'mysql2/promise'

//função para a conexão com o banco de dados
//function for database connection
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

//função para achar usuario e senha 
//function to find username and password
export async function buscarUsuario(usuario, senha) {
  const conexao = await conectar()
  const sql = 'select * from usuario where nome=? and senha=?;'
  const [linhas] = await conexao.query(sql, [usuario, senha])
  return linhas
}

// Função para listagem de produtos
//Product listing function
export async function listarProdutos() {
  const conexao = await conectar()
  const sql = 'select * from produtos;'
  const [produtos] = await conexao.query(sql)
  return produtos
}

// Função para procurar o produto e suas informações 
//Function to search for the product and its information
export async function recuperarProduto(id) {
  const conexao = await conectar()
  const sql = 'select * from produtos where codigo=?;'
  const [produto] = await conexao.query(sql, [id])

  if (produto && produto.length > 0) return produto[0]
  else return {}
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
