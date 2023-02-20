const axios = require('axios');
const { Pokemon, Tipo } = require('../db');
const { Op } = require('sequelize');

const pokemonById = {};

pokemonById.getPokemonById = async (req, res) => {
    const { idPokemon } = req.params;
    try {
        let pokemon = await Pokemon.findByPk(idPokemon, { include: Tipo });

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
            const tipos = apiPokemon.types.map((tipo) => { return { nombre: tipo.type.name } });
            const tiposEncontrados = await Tipo.findAll({ where: { nombre: { [Op.or]: tipos.map((tipo) => tipo.nombre), } } });

            pokemon = await Pokemon.create(newPokemon);
            await pokemon.setTipos(tiposEncontrados);

            for (let i = 0; i < tipos.length; i++) {
                let tipo = tipos[i];
                let tipoEncontrado = await Tipo.findOne({ where: { nombre: tipo.nombre } });
                if (!tipoEncontrado) tipoEncontrado = await Tipo.create({ nombre: tipo.nombre });
                await pokemon.addTipo(tipoEncontrado);
            }

            pokemon = await Pokemon.findByPk(pokemon.id, { include: Tipo });
        }

        const tiposNombres = pokemon.tipos.map(tipo => tipo.nombre);
        pokemon = { ...pokemon.toJSON(), tipos: tiposNombres };
        res.json(pokemon);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: `No se encontró el pokemon con el id: ${idPokemon}` });
    }
};

module.exports = pokemonById;
