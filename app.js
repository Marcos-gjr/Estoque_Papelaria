import express from 'express'
import session from 'express-session'
import { createEngine } from 'express-react-views'
import { listarProdutos, buscarUsuario } from './banco.js'
import http from 'http'
// TO DO remover body-parser

/* const porta = 3000 */

const app = express()

app.use(session({ secret: 'SessionSecret: uhterere', resave: true, saveUninitialized: true }))
app.use(express.urlencoded({ extended: true }))
app.engine('jsx', createEngine())
app.set('view engine', 'jsx')
app.set('views', './views')
app.set('port', 3000)

app.get('/', (req, res) => {
  res.render('login')
})

app.get('/listagemprodutos', async (req, res) => {
  if (req.session.usuario) {
    /* const produtos = await listarProdutos() */
    res.render('listagemprodutos', { title: 'John' })
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
    res.render('listagemprodutos')
  } else {
    res.render('login')
  }
})

/* app.listen(porta) */
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'))
})
