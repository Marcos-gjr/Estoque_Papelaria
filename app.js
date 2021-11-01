import express from 'express'
import session from 'express-session'
import { createEngine } from 'express-react-views'
import { listarProdutos, buscarUsuario, recuperarProduto } from './banco.js'
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

app.get('/', async (req, res) => {
  if (req.session.usuario) {
    const produtos = await listarProdutos()
    res.render('listagemprodutos', { produtos, method: 'get' })
  } else {
    res.render('login')
  }
})

app.get('/listagemprodutos', async (req, res) => {
  if (req.session.usuario) {
    const produtos = await listarProdutos()
    res.render('listagemprodutos', { produtos, method: 'get' })
  } else {
    res.render('404')
  }
})

app.post('/', async (req, res) => {
  const usuarioEntrando = req.body.txtUsuario
  const senhaEntrando = req.body.pswSenha

  const linhas = await buscarUsuario(usuarioEntrando, senhaEntrando)
  let achou = false
  if (linhas && linhas.length > 0) achou = true

  if (achou) {
    req.session.usuario = usuarioEntrando
    const produtos = await listarProdutos()
    res.render('listagemprodutos', { produtos, method: 'post' })
  } else {
    res.render('login')
  }
})

app.get('/alterar/:codigo', async (req, res) => {
  const codigo = parseInt(req.params.codigo)

  const produto = await recuperarProduto(codigo)
  if (produto == {}) {
    res.render('erro', { mensagem: 'Produto inexistente', link: '/listagemprodutos' })
  } else {
    res.render('produto', {
      titulo: 'Alteração de Produtos',
      produto,
      action: '/alterar/' + codigo
    })
  }
})

/* app.listen(porta) */
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port http://localhost:' + app.get('port') + '/')
})
