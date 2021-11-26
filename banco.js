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

//Usuários

// Função para achar usuario e senha
// Function to find username and password
export async function buscarUsuario(usuario, senha) {
  const conexao = await conectar()
  const sql = 'select * from usuarios where nome=? and senha=?;'
  const [linhas] = await conexao.query(sql, [usuario, senha])
  return linhas
}

//Produto

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
  const sql = 'select * from produtos where prod_id=?;'
  const [produtos] = await conexao.query(sql, [id])

  if (produtos && produtos.length > 0) return produtos[0]
  else return {}
}

export async function atualizarProduto(nome, /* quantidade, */ descricao, id) {
  const conexao = await conectar()
  /* quantidade=?, */
  const sql = 'update produtos set prod_nome=?, prod_desc=? where prod_id=?;'
  await conexao.query(sql, [nome, /* quantidade, */ descricao, id])
}

export async function excluirProduto(id) {
  const conexao = await conectar()
  const sql = 'delete from produtos where codigo=?;'
  await conexao.query(sql, [id])
}

// (ini) função para inserir um novo produto
// function to start a new product
export async function criarProduto(prod_nome, prod_desc) {
  const conexao = await conectar()
  const sql = 'insert into produtos (prod_nome, prod_quant, prod_desc) values (?,?,?);'
  return await conexao.query(sql, [prod_nome, 0, prod_desc])
}

//Cliente

export async function recuperarCliente(id) {
  const conexao = await conectar()
  const sql = 'select * from clientes where cli_id=?;'
  const [clientes] = await conexao.query(sql, [id])

  if (clientes && clientes.length > 0) return clientes[0]
  else return {}
}

// Função para listagem de Clientes
// Cli listing function
export async function listarClientes() {
  const conexao = await conectar()
  const sql = 'select * from clientes;'
  const [clientes] = await conexao.query(sql)
  return clientes
}

//função para inserir um novo cliente
export async function criarCliente(cli_nome, cli_tel, cli_cep, cli_num) {
  const conexao = await conectar()
  const sql = 'insert into clientes (cli_nome, cli_tel, cli_cep , cli_num) values (?,?,?,?);'
  return await conexao.query(sql, [cli_nome, cli_tel, cli_cep, cli_num])
}

export async function atualizarCliente(nome, telefone, cep, numero, codigo) {
  const conexao = await conectar()
  const sql = 'update clientes set cli_nome=?,  cli_tel=?, cli_cep=? , cli_num=? where cli_id=?;'
  await conexao.query(sql, [nome, telefone, cep, numero, codigo])
}

// Fornecedor

//função para inserir um novo fornecedor
export async function criarFornecedor(for_nome, for_tel, for_desc, for_cep, for_num) {
  const conexao = await conectar()
  const sql = 'insert into fornecedores (for_nome, for_tel, for_desc, for_cep, for_num) values (?,?,?,?,?);'
  return await conexao.query(sql, [for_nome, for_tel, for_desc, for_cep, for_num])
}

export async function recuperarFornecedor(id) {
  const conexao = await conectar()
  const sql = 'select * from fornecedores where for_id=?;'
  const [fornecedores] = await conexao.query(sql, [id])
  if (fornecedores && fornecedores.length > 0) return fornecedores[0]
  else return {}
}

export async function atualizarFornecedor(for_nome, for_tel, for_desc, for_cep, for_num, codigo) {
  const conexao = await conectar()
  const sql = 'update fornecedores set for_nome=?, for_tel=?,for_desc=? , for_cep=? , for_num=? where for_id=?;'
  await conexao.query(sql, [for_nome, for_tel, for_desc, for_cep, for_num, codigo])
}

export async function listarFornecedores() {
  const conexao = await conectar()
  const sql = 'select * from fornecedores;'
  const [fornecedores] = await conexao.query(sql)
  return fornecedores
}
