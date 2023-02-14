// const { Router } = require("express");
const axios = require('axios');

const pokemonController = {};

pokemonController.getPokemons = async (req, res) => {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
        res.send(response.data.results);
        // console.log(response.data.results);

    } catch (error) {
        console.error(error);
        res.send([]);
    }
}
module.exports = pokemonController;