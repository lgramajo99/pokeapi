const axios = require('axios');
const { Op } = require('sequelize');
const { Pokemon } = require('../models/Pokemon.js');

const searchPokemonByName = async (req, res) => {
    const name = req.query.name.trim().toLowerCase();
    console.log(name)
    const databasePokemon = await Pokemon.findAll({
        where: {
            nombre: {
                [Op.iLike]: `%${name}%`
            }
        }
    });

    if (databasePokemon.length === 0) {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const pokeapi = {
                id: response.data.id,
                nombre: response.data.name,
                imagen: response.data.sprites.front_default,
                vida: response.data.stats[0].base_stat,
                ataque: response.data.stats[1].base_stat,
                defensa: response.data.stats[2].base_stat,
                velocidad: response.data.stats[5].base_stat,
                altura: response.data.height,
                peso: response.data.weight
            };
            return res.json([pokeapi]);
        } catch (error) {
            return res.status(404).json({ message: 'No se encontró el Pokemon' });
        }
    } else {
        const response = databasePokemon.map(pokemon => ({
            id: pokemon.id,
            nombre: pokemon.nombre,
            imagen: pokemon.imagen,
            vida: pokemon.vida,
            ataque: pokemon.ataque,
            defensa: pokemon.defensa,
            velocidad: pokemon.velocidad,
            altura: pokemon.altura,
            peso: pokemon.peso
        }));
        return res.json(response);
    }
};

module.exports = searchPokemonByName;