async function conectar()
{
    if (global.minhaConexao && global.minhaConexao.state != 'disconected')
    {
        return global.minhaConexao
    }

    const mysql = require('mysql2/promise')
    //                                        mysql://usuario:senha@servidor:porta/nomeBanco
    const ccc = await mysql.createConnection('mysql://root:@localhost:3306/damamajo')
    global.minhaConexao = ccc
    return ccc
}

async function listarProdutos()
{
    const conexao = await conectar()
    //const sql = 'select * from produtos ;'
    const sql = 'select * from produtos;'
    const [linhas] = await conexao.query(sql)
    return linhas
}

module.exports = {listarProdutos}