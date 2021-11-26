import {
  atualizarCliente,
  atualizarProduto,
  buscarUsuario,
  criarProduto,
  criarCliente,
  atualizarFornecedor,
  criarFornecedor
} from './banco.js'

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

// Produto
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

export async function postCriarProduto(req, res) {
  if (req.session.usuario) {
    const nome = req.body.nome
    const descricao = req.body.descricao

    await criarProduto(nome, descricao)
    res.redirect('/listagemprodutos')
  } else {
    res.redirect('/login')
  }
}

// Cliente
export async function postAlterarCliente(req, res) {
  if (req.session.usuario) {
    const codigo = parseInt(req.params.codigo)
    const cli_nome = req.body.cli_nome
    const cli_tel = req.body.cli_tel
    const cli_cep = req.body.cli_cep
    const cli_num = req.body.cli_num

    console.log(codigo)

    await atualizarCliente(cli_nome, cli_tel, cli_cep, cli_num, codigo)
    res.redirect('/listagemclientes')
  } else {
    res.redirect('/login')
  }
}

export async function postCriarCliente(req, res) {
  if (req.session.usuario) {
    const cli_nome = req.body.cli_nome
    const cli_tel = req.body.cli_tel
    const cli_cep = req.body.cli_cep
    const cli_num = req.body.cli_num

    await criarCliente(cli_nome, cli_tel, cli_cep, cli_num)
    res.redirect('/listagemclientes')
  } else {
    res.redirect('/login')
  }
}

// Fornecedor
export async function postAlterarFornecedor(req, res) {
  if (req.session.usuario) {
    const codigo = parseInt(req.params.codigo)
    const for_nome = req.body.for_nome
    const for_tel = req.body.for_tel
    const for_desc = req.body.for_desc
    const for_cep = req.body.for_cep
    const for_num = req.body.for_num

    console.log(codigo) //for_nome, for_tel, for_desc, for_cep, for_num,

    await atualizarFornecedor(for_nome, for_tel, for_desc, for_cep, for_num, codigo)
    res.redirect('/listagemfornecedores')
  } else {
    res.redirect('/login')
  }
}

export async function postCriarFornecedor(req, res) {
  if (req.session.usuario) {
    const for_nome = req.body.for_nome
    const for_tel = req.body.for_tel
    const for_desc = req.body.for_desc
    const for_cep = req.body.for_cep
    const for_num = req.body.for_num

    await criarFornecedor(for_nome, for_tel, for_desc, for_cep, for_num)
    res.redirect('/listagemfornecedores')
  } else {
    res.redirect('/login')
  }
}
