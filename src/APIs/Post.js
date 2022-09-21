const express = require('express')

const app = express()
app.listen('4500')

app.use(express.json())

app.route('/').post( (req, res) => res.send(res.body))