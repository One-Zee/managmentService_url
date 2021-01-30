/**
 * loading model # URL #
 */
const URL = require('../db/models/url_model');

/**
 * loading dependencies
 */
const shortid = require('shortid');


/**
 *  middleware for generating hash part of short_url
 */
exports.genHash= async(req,res,next)=>{
    try {
        await check(req.baseUrl,false);
        req.short_url = obj.short_url;
        next();  
    } 
    catch (error) {
        console.log(error);
    }
  }
  
/**
 *  recrusive function that ensures uniqueness of short_url
 */
  let check = async function (base_url,bool) {
  let short_url = base_url + '/' + shortid.generate();
    await URL.findOne({
       where: { short_url },
       raw: true, 
     })
     .then((url) => {
       // Checking if there is existing # short_url #
       if (url == null)                
          bool = true; 
       else 
          bool = false;       
     })
     .catch((err) => {
       res.status(400).end('SQL Error');
     }); 
   if(bool == true){
     obj.short_url = short_url;
     return;
   }else
     await check(base_url,bool);
  }
  
  let obj = { short_url: '' }