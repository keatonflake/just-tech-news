// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// create coonetion to our database- pass mysql info for udername and password
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_user, process.env.DB_pw, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;
