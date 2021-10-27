async function conectar() {
  /* if (global.minhaConexao && global.minhaConexao.state != 'disconected')
  {
    return global.minhaConexao
  } */

  const mysql = require('mysql2/promise')
  //                                        mysql://usuario:senha@servidor:porta/nomeBanco
  const conexao = await mysql.createConnection('mysql://root:@localhost:3306/damamajo')
  global.minhaConexao = conexao
  return conexao
}

async function listarProdutos() {
  const conexao = await conectar()
  const sql = 'select * from produtos;'
  const [linhas] = await conexao.query(sql)
  return linhas
}

module.exports = { listarProdutos }
