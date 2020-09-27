/**
 * loading dependencies
 */
const amqp = require('amqplib');

/**
 * loading config values
 */
const config = require('../../config');

/**
 * exporting # producer #
 */
module.exports = async function conn(msgs,create){ 

    const queue = config.queueName;  // Queue name
    const payload = [{create},msgs]; 
    
    try{
        
        const conn = await amqp.connect(config.rabbitSettings);  // Creating a # connection #
        console.log('[x] Connection Created...');

        const channel = await conn.createChannel(); // Creating a new # channel # 
        // console.log('Channel Created...');

        const res = await channel.assertQueue(queue); // Creating # queue # if it does not exist.
        //console.log('Queue created...')
        

        await channel.sendToQueue(queue,Buffer.from(JSON.stringify(payload)));
        console.log('[y] msg sent to queue...')

        await channel.close();  // Closing # channel # after msg is sent.

        await conn.close();  // Closing # connection # after channel is closed.
        console.log('[z] Connection Closed..')
        
    }
    catch(err){
        console.log('error is ' + err); 
    }
}