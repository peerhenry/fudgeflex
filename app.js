var express = require('express')
var path = require('path')
var app = express()

// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 3000

app.use(express.static(__dirname))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, function () {
  console.log('App listening on port ' + port)
})