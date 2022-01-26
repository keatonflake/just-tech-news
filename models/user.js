const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our user model
class User extends Model {}

// define table columns and configuration
User.init(
    {
        // table Column definitions go here
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        }
    },
        
    {
        // table configuration options go here
        sequelize,
        // dont automaticly create created at/updated at timestamp fields
        timestamps: false,
        // dont pluralize the name of the database table
        freezeTableName: true,
        // use underscores instead of camel casing (i.e. `comment_text)
        underscored: true,
        // make it so our model name stays lowercase in the database
        modelName: 'user'
    }
);

module.exports = User;