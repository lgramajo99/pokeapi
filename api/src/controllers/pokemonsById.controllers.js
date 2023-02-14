
const axios = require('axios');

const getPokemonById = async (req, res) => {
    try {
        const idPokemon = req.params.idPokemon;

        const pokemonResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
        const pokemon = pokemonResponse.data;

        const pokemonTypeResponse = await axios.get(`https://pokeapi.co/api/v2/type/${pokemon.types[0].type.name}`);
        const pokemonType = pokemonTypeResponse.data;

        const responseData = {
            pokemon: pokemon,
            type: pokemonType
        };

        res.send(responseData);
    } catch (error) {
        console.error(error);
        res.status(404).send({ error: `No se pudo obtener el pokemon con el id: ${req.params.idPokemon} ` });
    }
};

module.exports = getPokemonById 