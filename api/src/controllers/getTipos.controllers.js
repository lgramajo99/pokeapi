const axios = require('axios');
const { Tipo } = require('../db.js');

const tipoController = {};

tipoController.getTipos = async (req, res) => {
    try {
        const tiposInDatabase = await Tipo.findAll();
        if (tiposInDatabase.length > 0) { return res.json(tiposInDatabase); }
        const response = await axios.get('https://pokeapi.co/api/v2/type');
        const tiposFromAPI = response.data.results.map((result) => result.name);
        const tiposInDB = await Tipo.bulkCreate(tiposFromAPI.map((name) => ({ nombre: name })));
        return res.json(tiposInDB);
    } catch (error) {
        console.error(error);
        return res.status(500).send('Tipo no encontrado.');
    }
};

module.exports = tipoController;