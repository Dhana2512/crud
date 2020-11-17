'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 4000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


const users = [];
// app.get('/', (req, res) => {
//     res.send('Hello Prakash')
// })

// app.get('/dhana', (req, res) => {
//     res.send('<h2>Hello Dhana</h2>')
// })

app.post('/create', (req, res) => {
    const { name } = req.body;
    users.push(name);
    res.send(`Welcome to our application ${name}`)
})

app.get('/create/:id', (req, res) => {
    const { id } = req.params;
    const user = users[+id]
    res.json({user})
})

app.get('/create', (req, res) => {
    const { id } = req.query;
    console.log(req.ips)
    // if not provide id get all users
    if (!id){
       return res.json({users})
    }
    // if provide id get that users
    const user = users[+id]
    res.json({user})
})

app.put('/create', (req, res) => {
    const { name, index } = req.body;
    users.splice(index, 1, name)
    res.json({users})
})

app.delete('/create', (req, res) => {
    const { index } = req.body;
    users.splice(index, 1)
    res.json({users})
})

app.listen(port, () => {
    console.log(`App listen port @ ${port}`)
})