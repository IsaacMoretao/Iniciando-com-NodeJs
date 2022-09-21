const express = require('express')

const app = express()
app.listen('5000')

app.use(express.json())

app.route('/').post( (req, res) => {
  res.send( req.query )
})