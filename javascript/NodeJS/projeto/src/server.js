const porta = 3003

const express = require('express')
const app = express()

app.use((req, res, next) => { // middleware para qualquer situação
    console.log('Middleware 1')
    next()
} )

app.get('/produtos', (req, res, next) => {
    res.send({nome: 'Notebook', preco: 1234})
})

app.listen(porta, () => {
    console.log('Servidor executando na porta 3003')
})
