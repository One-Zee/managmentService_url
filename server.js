/**
 * loading dependencies
 */
const express = require('express');
const helmet = require('helmet');

/**
 * loading config values
 */
const config = require('./config');

/**
 * setting port
 */
const PORT = process.env.PORT || config.PORT;


/**
 * Initializing # express app #
 */
const app = express();

/**
 * Initialize middleware
 */
app.use(express.json());
app.use(helmet());

/**
 * loading  # routes #
 */


 /**
 * Initializing routes
 */


 /**
 * Initializing and listening to # PORT #
 */
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}...`);
});