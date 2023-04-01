const { Sequelize } = require('sequelize');

const db = new Sequelize({
    username: "postgres",
    database: "socialwires",
    host: "localhost",
    port: "5432",
    password: "root",
    dialect: "postgres"
});

module.exports = db;