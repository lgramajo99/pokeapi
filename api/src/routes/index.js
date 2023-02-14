const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonController = require('../controllers/pokemons.controller.js')
// const getPokemonsById = require('../controllers/pokemonsById.controllers.js')
// const getPokemonByName = require('../controllers/pokemonByName.controllers.js')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/pokemons', pokemonController.getPokemons);
// router.use('/pokemons/:id', getPokemonsById)


module.exports = router;
