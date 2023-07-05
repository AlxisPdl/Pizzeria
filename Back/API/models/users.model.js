const sequelize = require('../config/database.config.js');
const { DataTypes, Model } = require('sequelize');


class User extends Model{}; 

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: DataTypes.TEXT('long'),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      accessToken: {
        type: DataTypes.TEXT('long'),
        unique: true,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      }

}, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
})

module.exports = User;