/**
 * loading dependencies
 */
const shortId = require('shortid'); 

/**
 * loading model # URL #
 */
const URL = require('../db/models/url_model');


/**
 * loading msg # producer #
 */
const producer = require('../rabbitMQ/producer')

/**
 * Insert one # shortUrl #   
 */
exports.cr_shortUrl = async(req,res)=>{
    const { real_url } = req.body; 
        URL.create({
            real_url: real_url,
            short_url: req.short_url
        })
        .then((url)=>{
            producer(url.dataValues,true);
            res.status(201).end(JSON.stringify(url.dataValues));
        })
        .catch((err)=>{
              res.status(400).end('SQL Error: ' + err.errors[0].message);
          
        });

        
}


exports.del_shortUrl = (req,res)=>{
    const { id } = req.params; 
   
        URL.destroy({ where: { id } })
        .then((deleted) => {
            //checking if the "deleted" is diffrent then 0 and responding accordingly
          if (deleted !== 0) {
              producer(req.url, false)
            res.status(200).end('Deleted');
          } else {
            res.status(404).end('Not Found');
          }
        })
        .catch((err) => {
          res.status(400).end('SQL Error');
        });        
}

