const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.config.js');

class Texmex extends Model {};

Texmex.init({
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
    prix: {
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
    modelName: 'Texmex',
    tableName: 'texmexs'
});

module.exports = Texmex;

