const axios = require('axios');

const pokemonController = {};

pokemonController.getPokemons = async (req, res) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
        const pokemons = response.data.results;

        const pokemonData = await Promise.all(
            pokemons.map(async (pokemon) => {
                const pokemonResponse = await axios.get(pokemon.url);
                const pokemonData = {
                    id: pokemonResponse.data.id,
                    nombre: pokemonResponse.data.name,
                    imagen: pokemonResponse.data.sprites.front_default,
                    vida: pokemonResponse.data.stats[0].base_stat,
                    ataque: pokemonResponse.data.stats[1].base_stat,
                    defensa: pokemonResponse.data.stats[2].base_stat,
                    velocidad: pokemonResponse.data.stats[5].base_stat,
                    altura: pokemonResponse.data.height,
                    peso: pokemonResponse.data.weight,
                    tipos: pokemonResponse.data.types.map(type => type.type.name).join(', ')
                };
                return pokemonData;
            })
        );

        res.send(pokemonData);
    } catch (error) {
        console.error(error);
        res.status(500).send('No se encontraron los pokemones.');
    }
};

module.exports = pokemonController;