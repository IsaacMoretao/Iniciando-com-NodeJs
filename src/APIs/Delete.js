const express = require('express')

const app = express()
app.listen('4500')

app.route('/:indentificador').delete( (req, res) => {
  author = ""
  res.send(req.params.indentificador)
})