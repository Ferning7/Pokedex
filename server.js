// importa as coisas
const express = require('express')
const axios = require('axios')
const path = require('path')

// cria servidor
const server = express()
const porta = 3333

server.use(express.static(path.join(__dirname, 'public')))

server.listen(porta, ()=>{
    console.log(`Perigoso ta na ativa na porta ${porta}`)
})
