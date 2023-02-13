const { Router } = require("express");

const router = Router();

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const pokemonByPK = await Pokemon.findByPk(id)
        if (!pokemon) throw new Error(`el "${id}" no corresponde a un pokemon existente`)


        return res.status(200).json(pokemonByPK);

    } catch (error) {
        return res.status(404).send(error.message);

    }
});