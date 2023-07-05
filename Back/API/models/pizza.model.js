const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.config.js');

class Pizza extends Model {};

Pizza.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prix_petite: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    prix_moyenne: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    prix_grande: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    image: {
        type: DataTypes.BLOB,
        allowNull: true
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },

}, {
    sequelize,
    modelName: 'Pizza',
    tableName: 'pizzas'
});

module.exports = Pizza;
