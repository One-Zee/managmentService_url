/**
 * loading dependencies
 */
const validUrl = require('valid-url'); // is used for validating # URL #


/**
 * loading model # URL #
 */
const URL = require('../db/models/url_model');



/**
 * Checking validity of sent url
 */
exports.validity =async(req,res,next)=>{
    const { real_url } =await req.body;
    req.baseUrl = req.protocol + '://' + req.get('host') ;
   // console.log(req.baseUrl);

    /**
     * Check if the # baseUrl # is valid or not   
     */
    if(!validUrl.isUri(real_url)){
        res.status(401).json("Url is invalid.");
    }   
    
      // loading model # URL #
     if(validUrl.isUri(real_url)){
        URL.findOne({
            where: { real_url },
            raw: true, 
          })
            .then((url) => {
              // Checking if there is existing # url #
              if (url == null) {               
                next();
              } else {
                res.status(200).end(JSON.stringify(url));
              }
            })
            .catch((err) => {
              res.status(400).end('SQL Error');
            });
        }else{
           res.status(400).end('Url is not valid');
        }
    
}

exports.findID =(req,res,next)=>{
  const { id } = req.params;
  URL.findOne({
    where: { id },
    raw: true, 
  })
    .then((url) => {
      // Checking if there is existing # url #
      if (url == null) {                
        res.status(404).end('Not Found');
      } else {
        req.url = url;
        next();
      }
    })
    .catch((err) => {
      res.status(400).end('SQL Error');
    });
}