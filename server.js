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
const url_routes = require('./src/routes/url_routes');

 /**
 * Initializing routes
 */
app.use('/routes/url',url_routes);

 /**
 * Initializing and listening to # PORT #
 */
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}...`);
});