import { excluirProduto, listarProdutos, recuperarProduto, listarClientes, recuperarCliente, criarCliente } from './banco.js'

export async function getPrincipal(req, res) {
  if (req.session.usuario) {
    const produtos = await listarProdutos()
    res.render('principal', { produtos })
  } else {
    res.redirect('/login')
  }
}

export function getLogin(req, res) {
  if (req.session.usuario) {
    res.redirect('/')
  } else {
    res.render('login')
  }
}

export async function getListagemProdutos(req, res) {
  if (req.session.usuario) {
    const produtos = await listarProdutos()
    res.render('listagemprodutos', { produtos })
  } else {
    res.redirect('/login')
  }
}

export async function getProdutosRecebidos(req, res) {
  if (req.session.usuario) {
    const produtos = await listarProdutos()
    res.render('produtosrecebidos', { produtos })
  } else {
    res.redirect('/login')
  }
}

export function getFornecedores(req, res) {
  if (req.session.usuario) {
    res.render('fornecedores')
  } else {
    res.redirect('/login')
  }
}

export async function getClientes(req, res) {
  if (req.session.usuario) {
    const clientes = await listarClientes()
    res.render('listagemclientes', { clientes })
  } else {
    res.redirect('/login')
  }
}

export function getChegada(req, res) {
  if (req.session.usuario) {
    res.render('chegada')
  } else {
    res.redirect('/login')
  }
}

export function getSaida(req, res) {
  if (req.session.usuario) {
    res.render('saida')
  } else {
    res.redirect('/login')
  }
}

export async function getProdutosVendidos(req, res) {
  if (req.session.usuario) {
    const produtos = await listarProdutos()
    res.render('produtosvendidos', { produtos })
  } else {
    res.redirect('/login')
  }
}

export function getLogout(req, res) {
  if (req.session.usuario) {
    req.session.usuario = null
  }
  res.redirect('/login')
}

export function getEsqueci(req, res) {
  if (req.session.usuario) {
    res.redirect('/principal')
  } else {
    res.render('esqueci')
  }
}

export async function getAlterarProduto(req, res) {
  if (req.session.usuario) {
    const codigo = parseInt(req.params.codigo)

    const produto = await recuperarProduto(codigo)
    if (produto == {}) {
      res.render('erro', { mensagem: 'Produto inexistente', link: '/listagemprodutos' })
    } else {
      res.render('alterarproduto', {
        title: 'Alteração do Produto',
        produto,
        cancelar: '/listagemprodutos',
        action: '/alterarproduto/' + codigo
      })
    }
  } else {
    res.redirect('/login')
  }
}

export async function getCriarProduto(req, res) {
  if (req.session.usuario) {
    res.render('alterarproduto', {
      title: 'Criação de Produto',
      cancelar: '/listagemprodutos',
      action: '/criarproduto'
    })
  } else {
    res.redirect('/login')
  }
}

export async function getCriarCliente(req, res) {
  if (req.session.usuario) {
    res.render('alterarcliente', {
      title: 'Criação de Cliente',
      cancelar: '/listagemclientes',
      action: '/criarcliente'
    })
  } else {
    res.redirect('/login')
  }
}

export async function getAlterarCliente(req, res) {
  if (req.session.usuario) {
    const codigo = parseInt(req.params.codigo)

    const cliente = await recuperarCliente(codigo)
    if (cliente == {}) {
      res.render('erro', { mensagem: 'Clientes inexistente', link: '/clientes' })
    } else {
      res.render('alterarcliente', {
        title: 'Alteração do Cliente',
        cliente,
        action: '/alterarcliente/' + codigo
      })
    }
  } else {
    res.redirect('/login')
  }
}

export async function getExcluirCodigo(req, res) {
  if (req.session.usuario) {
    const codigo = parseInt(req.params.codigo)

    await excluirProduto(codigo)

    const produtos = await listarProdutos()
    res.render('listagemprodutos', { produtos })
  } else {
    res.redirect('/login')
  }
}
