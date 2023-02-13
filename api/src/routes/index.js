const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const ctrGetPokemon = require('../controllers/pokemons.controller.js')
const ctrGetId = require('../controllers/pokemonsId.controllers')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', ctrGetPokemon);


module.exports = router;
