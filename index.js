const express = require('express');
const fs = require('fs')
const server = express();

const fake_data = fs.readFileSync('./fake_user_data.json', 'utf-8')
const fake_balances_data = fs.readFileSync('./fake_balances_data.json', 'utf-8')

server.get('/',(req, res) => {
    res.send({message: "Hello world!!!",})
})

server.get('/academic_background/',(req, res) => {
    res.send({user_data: JSON.parse(fake_data)})
})

server.get('/balances/',(req, res) => {
    res.send({ user_data: JSON.parse(fake_balances_data)})
})

server.listen(3333, () => {
    console.log("I'm listening!!!")
})