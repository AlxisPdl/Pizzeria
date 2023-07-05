const { Sequelize } = require('sequelize');
const config = require('./config.json').development;

const sequelize = new Sequelize({
    host: config.host,
    database: config.database,
    username: config.username,
    password: config.password,
    dialect: config.dialect
});

module.exports = sequelize;