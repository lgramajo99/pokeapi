const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('tipo', {
        id: {
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
    }, { timestamps: false })
}
