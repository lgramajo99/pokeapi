const { DataTypes } = require('sequelize');

module.export = (sequelize) => {
    sequelize.define('tipos', {
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
