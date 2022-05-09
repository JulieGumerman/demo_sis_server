const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.send({message: "Hello world!!!", food: "nom nom nom"})
})

app.listen(3333, () => {
    console.log("I'm listening!!!")
})