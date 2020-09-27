/**
 * loading # dependencies #
 */
const { DataTypes } = require('sequelize');


/**
 * loading # db # connection
 */
const db = require('../dbConnect');


/**
 * Define model for table # url #
 */
const URL =  db.define('url',{
    real_url: {
            type: DataTypes.STRING(10000),
            allowNull: false,
            unique: true,
          },
    short_url:{
        type: DataTypes.STRING(255),
        unique: true,
        allowNull : false,

    }
    },{
        timestamps: false,
        freezeTableName: true 
    });

    URL.sync({force : false});

/**
 * exporting model # URL #
 */
module.exports = URL;