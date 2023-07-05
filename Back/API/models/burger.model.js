const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.config.js');

class Burgers extends Model {};

Burgers.init({
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
    prix_seul: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    prix_menu: {
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

module.exports = Burgers;