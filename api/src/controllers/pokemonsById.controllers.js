const axios = require('axios');
const { Pokemon, Tipo } = require('../db');
const { Op } = require('sequelize');

const pokemonById = {};

pokemonById.getPokemonById = async (req, res) => {
    const { idPokemon } = req.params;
    try {
        let pokemon = await Pokemon.findByPk(idPokemon, { include: Tipo, });

        if (!pokemon) {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
            const apiPokemon = response.data;
            const newPokemon = {
                id: apiPokemon.id,
                nombre: apiPokemon.name,
                imagen: apiPokemon.sprites.front_default,
                vida: apiPokemon.stats[0].base_stat,
                ataque: apiPokemon.stats[1].base_stat,
                defensa: apiPokemon.stats[2].base_stat,
                velocidad: apiPokemon.stats[5].base_stat,
                altura: apiPokemon.height,
                peso: apiPokemon.weight,
            };

            const tipos = apiPokemon.types.map((tipo) => { return { name: tipo.type.name } });

            pokemon = await Pokemon.create(newPokemon);

            await pokemon.addTipos(
                await Tipo.findAll({
                    where: { nombre: { [Op.or]: tipos.map((tipo) => tipo.nombre), } },
                })
            );
            pokemon = await Pokemon.findByPk(idPokemon, { include: Tipo, });
        }
        res.json(pokemon);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: `No se encontro el pokemon con el id: ${idPokemon}` });
    }
};

module.exports = pokemonById;