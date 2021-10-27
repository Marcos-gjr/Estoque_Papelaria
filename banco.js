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