const { Router } = require("express");

const router = Router();

router.getPokemonsById = async (req, res) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.idPokemon}`);
        const pokemon = response.data;
        const typeResponse = await axios.get(pokemon.types[0].type.url);
        const type = typeResponse.data.name;
        res.status(200).send({
            name: pokemon.name,
            height: pokemon.height,
            weight: pokemon.weight,
            type
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: 'Error al obtener el pokemon'
        });
    }
}

module.exports = router;

