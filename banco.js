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

export async function listarProdutos() {
  const conexao = await conectar()
  const sql = 'select * from produtos;'
  const [linhas] = await conexao.query(sql)
  return linhas
}
