const porta = 3003

const express = require('express')

const bancoDados = require('./banco_dados')

const bodyParser = require('body-parser')

const app = express()

//para qualquer requisicao no servidor express, vai passar nesse middleware e se tiver um padrao url encoded
//no dados do corpo da requisicao quando chegar a requisicao ao servidor, essas informacoes serao automaticamente
//transformadas em objetos para serem utilizadas no servidor
app.use(bodyParser.urlencoded( {extends: true} ))

app.get('/produtos', (req, res, next) => {
    res.send(//metodo send converte automaticamente o objeto para json
        bancoDados.getProdutos()
    )
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(//metodo send converte automaticamente o objeto para json
        bancoDados.getProduto(req.params.id)
    )
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)//converte automaticamente o objeto para json
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)//converte automaticamente o objeto para json
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDados.excluirProduto(
        req.params.id
    )
    res.send(produto)//converte automaticamente o objeto para json
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})