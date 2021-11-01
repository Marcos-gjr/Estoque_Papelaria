import mysql from 'mysql2/promise'

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

export async function buscarUsuario(usuario, senha) {
  const conexao = await conectar()
  const sql = 'select * from usuario where nome=? and senha=?;'
  const [linhas] = await conexao.query(sql, [usuario, senha])
  return linhas
}

export async function listarProdutos() {
  const conexao = await conectar()
  const sql = 'select * from produtos;'
  const [produtos] = await conexao.query(sql)
  return produtos
}
/*async function inserirProduto(produto)
{
    const conexao = await conectar()
    const sql = 'insert into livros (nome, quantidade, descricao) values (?,?,?);'
    return await conexao.query(sql, [produto.nome, produto.qtd, produto.des])
   
}
*/
