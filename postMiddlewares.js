import { atualizarProduto, buscarUsuario } from './banco.js'

export async function postLogin(req, res) {
  const usuario = req.body.usuario
  const senha = req.body.senha

  const linhas = await buscarUsuario(usuario, senha)
  let achou = false
  if (linhas && linhas.length > 0) achou = true

  if (achou) {
    req.session.usuario = usuario
    res.redirect('/')
  } else {
    res.render('login', { error: 'Usuario e/ou senha incorretos, caso tenha esquecido contate o administrador' })
  }
}

export async function postAlterarProduto(req, res) {
  if (req.session.usuario) {
    const codigo = parseInt(req.params.codigo)
    const nome = req.body.nome
    /* const quantidade = req.body.quantidade */
    const descricao = req.body.descricao

    await atualizarProduto(nome, /* quantidade, */ descricao, codigo)
    res.redirect('/listagemprodutos')
  } else {
    res.redirect('/login')
  }
}

export async function postAlterarCliente(req, res) {
  if (req.session.usuario) {
    const codigo = parseInt(req.params.codigo)
    const cli_nome = req.body.cli_nome
    const cli_tel = req.body.cli_tel
    const cli_cep = req.body.cli_cep
    const cli_num = req.body.descricao

    console.log(codigo)

    await atualizarProduto(cli_nome, cli_tel, cli_cep, cli_num, codigo)
    res.redirect('/listagemclientes')
  } else {
    res.redirect('/login')
  }
}
