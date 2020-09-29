/**
 * INITIALIZING # ROUTER #
 */
const router = require('express').Router();


/**
 * loading # Middleware #
 */
const { validity, findID } = require('../helpers/middleware');
const { genHash }=require('../helpers/checker');

/**
 * loading # Controllers #
 */
const { cr_shortUrl, del_shortUrl } = require('../controllers/url_ctrl');


/**
 * setting # routes #
 */

    // # Post # requests
        router.post('/cr_shortUrl' ,validity,genHash,cr_shortUrl);

    // # Del # requests
        router.delete('/:id', findID, del_shortUrl);


/**
 * exporting # ROUTER #
 */
module.exports = router;