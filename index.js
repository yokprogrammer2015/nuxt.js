var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => res.send('hello world! Puchong'))
app.post('/api/student/list', (req, res) => {
    let list = [
        {code: '101', name: 'Puchong'},
        {code: '102', name: 'Somsak'}
    ]
    res.send(list)
})
app.post('/api/student/save', (req, res) => res.send('hello world! Puchong'))
app.post('/api/student/del', (req, res) => res.send('hello world! Puchong'))

app.listen(7000, () => console.log('Example app listen on port 7000!'))