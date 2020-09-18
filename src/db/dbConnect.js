/**
 * loading dependencies
 */
const Sequelize = require('sequelize');

/**
 * loading values
 */
const config = require('../../config');

/**
 * Creating a connection to # db #
 */
const db = new Sequelize(config.DATABASE_NAME,config.DATABASE_USERNAME,config.DATABASE_PASSWORD,{
    host : config.DATABASE_URL,
    dialect : config.DATABASE_DIALECT,
    logging : false,
    define : {
        timestamps : false,
        freezeTableName: true
    },
});

/**
 * It tells sequelize if it should forcefully make changes to # db #
 */
db.sync({force : false}); 

/**
 * Checking connection to # db #
 */
db.authenticate()
  .then(() => {
    console.log('INFO - Database connected.');
  })
  .catch((err) => {
    console.log('ERROR - Unable to connect to the database:', err);
  });


/**
 * exporting # db #
 */  
module.exports = db;