// Bringing in all of the dependencies
const express = require('express')
const PORT = process.env.PORT || 3030
const app = express()
const api = require('./routes/apiroutes')
const html = require('./routes/htmlroutes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static(__dirname + '/assets'))

app.use(api)
app.use(html)

app.listen(PORT => {
    console.log('Server listening on PORT: ' + PORT)
})