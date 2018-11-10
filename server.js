// Bringing in all of the dependencies
const express = require('express')
const PORT = process.env.PORT || 3030
const app = express()
// Need to update this
const routes = require(NULL)

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static(__dirname + '/assets'))

app.use(routes)

app.listen(PORT => {
    console.log('Server listening on PORT: ' + PORT)
})