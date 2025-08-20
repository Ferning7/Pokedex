async function fetchPokemons() {
  const container = document.getElementById("pokemon-container");

  try {
    const response = await fetch("/pokemons");

    const pokemons = await response.json();

    pokemons.forEach((pokemons) => {
      const card = document.createElement("div");
      card.className = "pokemon-card";

      const pokemonID = pokemons.url.split("/").slice(-2)[0];
      const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonID}.png`;
      card.innerHTML = `
      <img src="${imageUrl}" alt="${pokemon.name}">
      <h3> ${pokemon.name} </h3>`;

      container.appendChild(card);
    });
  } catch (error) {
    console.error('Erro ao  buscar Pokemon: ', error)
    container.innerHTML = '<p> Não foi possível carregar os pokemons, tente novamente mais tarde </p>'
  }
}

fetchPokemons()