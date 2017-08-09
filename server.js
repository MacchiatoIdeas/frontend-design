const express = require('express')
const livereload = require('express-livereload')
const app = express()
const http = require('http')

livereload(app)

app.use('/', express.static('public'));

http.createServer(app).listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
