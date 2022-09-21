const express = require('express')

const app = express()
app.listen('5000')

app.use(express.json())

app.route('/').post( (req, res) => {
  const {nome, Cidade, livros_favoritos} = req.body
  res.send(`meu nome é ${nome} e minha cidade é ${Cidade}`)
})