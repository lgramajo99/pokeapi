const axios = require('axios');
const { Op } = require('sequelize');
const { Pokemon, Tipo } = require('../db');
const pokemonByName = {};

pokemonByName.searchPokemonByName = async (req, res) => {
    const { name } = req.query;
    try {
        const dbPokemons = await Pokemon.findAll({
            where: { nombre: { [Op.iLike]: `%${name}%` }, },
            include: Tipo,
        });
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
        const apiPokemon = response.data;
        const apiPokemonInfo = {
            id: apiPokemon.id,
            nombre: apiPokemon.name,
            imagen: apiPokemon.sprites.front_default,
            vida: apiPokemon.stats[0].base_stat,
            ataque: apiPokemon.stats[1].base_stat,
            defensa: apiPokemon.stats[2].base_stat,
            velocidad: apiPokemon.stats[5].base_stat,
            altura: apiPokemon.height,
            peso: apiPokemon.weight,
            tipos: apiPokemon.types.map((type) => {
                return { name: type.type.name };
            }),
        };
        if (result.length === 0) return res.status(404).json({ message: 'No se encontró ningún pokemon.' });
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(404).send({ message: 'No se encontro ningun pokemon' });
    }
};

module.exports = pokemonByName;