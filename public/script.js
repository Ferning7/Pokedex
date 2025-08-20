async function fetchPokemons() {
    const container = document.getElementById('pokemon-container')

    try {
    const response = await fetch('/pokemons') 
    
    const pokemons = await response.json()

    pokemons.forEach(pokemons => {
        const card = document.createElement('div')
        card.className = 'pokemon-card'
        
        const pokemonID = pokemons.url.split('/').slice(-2)[0]
    })
    } catch (error) {
         res.status(500).json({error: 'Erro ao buscar dados da PokeAPI'});
    }
    
}