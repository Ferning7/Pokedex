// importa as coisas
const express = require("express");
const axios = require("axios");
const path = require("path");
const { error } = require("console");

// cria servidor
const server = express();
const porta = 3333;

/*
configurando o express para servir arquivos estáticos da pasta 'public',
quando o cliente acessar o servidor, ele irá encontrar os arquivos da pasta public
*/
server.use(express.static(path.join(__dirname, "public")));

/*Criando rota /pokemons quando o servidor receber uma requisição do tipo get
na rota pokemons, o código será executado
*/

server.get("/pokemons", async (req, res) => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
    const pokemons = response.data.results;

    res.json(pokemons);

  } 
  catch (error) {
    res.status(500).json({error: 'Erro ao buscar dados da PokeAPI'});
  }
});

server.listen(porta, () => {
  console.log(`Perigoso ta na ativa na porta ${porta}`);
});
