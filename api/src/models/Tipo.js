const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Tipo', {
        id_tipo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING(25),
            allowNull: false,
            unique: true,
        }
    })
}
