const { Router } = require("express");

const router = Router();

router.get('/', async (req, res) => {
    Pokemon.findAll()
        .then(pokemons => res.json(pokemons))
        .catch(error => {
            console.error(error);
            res.status(500).send('Ocurrió un error al obtener los Pokemones.');
        });
})

module.exports = router;