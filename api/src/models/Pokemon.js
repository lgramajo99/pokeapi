const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(25),
      allowNull: false,
      unique: true
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vida: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ataque: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    defensa: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    velocidad: {
      type: DataTypes.FLOAT
    },
    altura: {
      type: DataTypes.FLOAT
    },
    peso: {
      type: DataTypes.FLOAT
    },
  });
};
