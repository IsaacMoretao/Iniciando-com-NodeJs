const express = require('express')

const app = express()
app.listen('4500')

app.route('/').get( (req, res) => {
  res.send("hellow")
})