const express = require('express')
const bc = require('./controllers/book_controller')
const app = express()
const PORT = 4000
app.use(express.json())

app.get('/api/books', bc.read)
app.post('/api/books', bc.create)
app.put('/api/books/:id', bc.update)
app.delete('/api/books/:id', bc.delete)

app.listen(PORT, () => {
   console.log(`The server is running on port ${PORT}`)
})