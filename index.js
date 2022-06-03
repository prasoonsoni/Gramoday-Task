const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const connectToDatabase = require('./db/db')
connectToDatabase()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('<center><h1>Welcome to Gramoday Task</h1>' +
        '<h3><a href="https://github.com/prasoonsoni/Gramoday-Task" target="_blank">Visit Repository</a></h3></center>')
})

app.listen(port, () => {
    console.log(`Gramoday Task listening on http://localhost:${port}`)
})