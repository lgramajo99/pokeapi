const { Router } = require("express");

const router = Router();

router.searchPokemonByName = async (nombre) => {
    try {
        const nombreSearch = nombre.trim().toLowerCase()
        const databasePokemon = await Pokemon.findAll({ where: { nombre: nombreSearch } })

        let pokeapi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
            .then(({ data }) => ({
                id: data.id,
                nombre: data.name,
                imagen: data.imagen,
                vida: data.vida,
                ataque: data.ataque,
                defensa: data.defensa,
                velocidad: data.velocidad,
                altura: data.altura,
                peso: data.peso
            }))
        return [...databasePokemon, pokeapi];
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'ocurrio un error' });
    }
}
module.exports = router;