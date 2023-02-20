const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonController = require('../controllers/pokemons.controller');
const pokemonById = require('../controllers/pokemonsById.controllers');
const pokemonByName = require('../controllers/pokemonByName.controllers');
const createPokemon = require('../controllers/pokemonPost.controllers.js')
const tipoController = require('../controllers/getTipos.controllers.js');


const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/pokemons', pokemonController.getPokemons);
router.get('/pokemons/name', pokemonByName.searchPokemonByName);
router.get('/pokemons/:idPokemon', pokemonById.getPokemonById);
router.get('/types', tipoController.getTipos);
router.post('/pokemons', createPokemon);

module.exports = router;
