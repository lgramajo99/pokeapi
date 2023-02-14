const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonController = require('../controllers/pokemons.controller.js')
const getPokemonById = require('../controllers/pokemonsById.controllers.js')
const searchPokemonByName = require('../controllers/pokemonByName.controllers')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/pokemons', pokemonController.getPokemons);
router.use('/pokemons/:idPokemon', getPokemonById);
// router.get('/pokemons/name', searchPokemonByName);

module.exports = router;
