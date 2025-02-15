/**
 * loading dependencies
 */
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
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
app.use(helmet());
app.use(cors());
app.use(express.json());

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