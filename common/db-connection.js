const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tune_my_car', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;