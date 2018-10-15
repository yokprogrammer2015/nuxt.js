const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => res.send('Hello World! Puchong'))
app.get('/api/student/list', (req, res) => res.send('Hello World! Puchong'))
app.post('/api/student/save', (req, res) => res.send('Hello World! Puchong'))
app.post('/api/student/del', (req, res) => res.send('Hello World! Puchong'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))