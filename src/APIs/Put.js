const express = require('express')

const app = express()
app.listen('4500')

app.use(express.json())

let author = 'moleton'

app.route('/').get( (req, res) => res.send(author))

app.route('/').put( (req, res) => {
  author = req.body.author
  res.send(author)
})