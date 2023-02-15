const { Pokemon, Tipo } = require('../db');

const createPokemon = async (req, res) => {
    const { nombre, imagen, vida, ataque, defensa, velocidad, altura, peso, tipo } = req.body;
    try {
        if (!nombre) {
            return res.status(400).json({ message: 'El nombre del pokemon es obligatorio' });
        }
        const newPokemon = await Pokemon.create({
            nombre,
            imagen,
            vida,
            ataque,
            defensa,
            velocidad,
            altura,
            peso,
        });

        const tiposDB = await Tipo.findAll({ where: { nombre: tipo } });
        await newPokemon.setTipos(tiposDB);
        return res.json(newPokemon);
    } catch (error) {
        console.error(error);
        return res.status(404).send('Error al crear el pokemon.');
    }
};

module.exports = createPokemon;