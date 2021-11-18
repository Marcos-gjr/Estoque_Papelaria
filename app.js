import express from 'express'
import session from 'express-session'
import { createEngine } from 'express-react-views'
import { listarProdutos, buscarUsuario, recuperarProduto, atualizarProduto, excluirProduto } from './banco.js'
import http from 'http'
import { config } from 'dotenv'
config()
// TO DO remover body-parser

const app = express()

app.use(session({ secret: 'SessionSecret: uhterere', resave: true, saveUninitialized: true }))
app.use(express.urlencoded({ extended: true }))
app.engine('jsx', createEngine())
app.set('view engine', 'jsx')
app.set('views', './views')
app.set('port', process.env.porta)

// Função para entrada com usuario
// User input function
app.get('/', async (req, res) => {
  if (req.session.usuario) {
    const produtos = await listarProdutos()
    res.render('principal', { produtos })
  } else {
    res.redirect('/login')
  }
})

app.get('/login', async (req, res) => {
  if (req.session.usuario) {
    res.redirect('/principal')
  } else {
    res.render('login')
  }
})

// Função que verifica o nome e senha do usuario
// Function that checks user name and password
app.post('/login', async (req, res) => {
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
})

// Função que pega os produtos
// Function that picks up the products
app.get('/listagemprodutos', async (req, res) => {
  if (req.session.usuario) {
    const produtos = await listarProdutos()
    res.render('listagemprodutos', { produtos })
  } else {
    res.redirect('/login')
  }
})

app.get('/produtosrecebidos', async (req, res) => {
  if (req.session.usuario) {
    const produtos = await listarProdutos()
    res.render('produtosrecebidos', { produtos })
  } else {
    res.redirect('/login')
  }
})

app.get('/produtosvendidos', async (req, res) => {
  if (req.session.usuario) {
    const produtos = await listarProdutos()
    res.render('produtosvendidos', { produtos })
  } else {
    res.redirect('/login')
  }
})

app.get('/principal', async (req, res) => {
  if (req.session.usuario) {
    const produtos = await listarProdutos()
    res.render('principal', { produtos })
  } else {
    res.redirect('/login')
  }
})

app.get('/logout', function (req, res) {
  /* req.logout() */

  if (req.session.usuario) {
    req.session.usuario = null
  }
  res.redirect('/login')
})

app.get('/esqueci', async (req, res) => {
  if (req.session.usuario) {
    res.redirect('/principal')
  } else {
    res.render('esqueci')
  }
})

// Função para alterar o produto
// Function to change the product
app.get('/alterar/:codigo', async (req, res) => {
  if (req.session.usuario) {
    const codigo = parseInt(req.params.codigo)

    const produto = await recuperarProduto(codigo)
    if (produto == {}) {
      res.render('erro', { mensagem: 'Produto inexistente', link: '/listagemprodutos' })
    } else {
      res.render('produto', {
        title: 'Alteração do Produto',
        produto,
        action: '/alterar/' + codigo
      })
    }
  } else {
    res.redirect('/login')
  }
})

app.post('/alterar/:codigo', async (req, res) => {
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
})

app.get('/excluir/:codigo', async (req, res) => {
  if (req.session.usuario) {
    const codigo = parseInt(req.params.codigo)

    await excluirProduto(codigo)

    const produtos = await listarProdutos()
    res.render('listagemprodutos', { produtos })
  } else {
    res.redirect('/login')
  }
})

/* app.listen(porta) */
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port http://localhost:' + app.get('port') + '/')
})
