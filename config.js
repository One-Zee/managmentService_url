const config = {

    // # mysql # db config localhost 
     // DATABASE_URL: 'localhost',
        DATABASE_URL: 'db',
        DATABASE_USERNAME: 'userOne',
        DATABASE_NAME: 'management_service', 
        DATABASE_PASSWORD: 'test123',
        DATABASE_DIALECT: 'mysql',

    // # PORT # // 
        PORT: 4444,

    // connection settings for # rabitMQ # //   
        rabbitSettings : {
            protocol:'amqp',
         // hostname: 'localhost',
            hostname:'rabbitmq',
            port: 5672,
            username:'guest',
            password:'guest',
            vhost:'/',
            authMechanism:['PLAIN','AMQPLAIN','EXTARNAL'] 
        },
        queueName: 'urls'
  };
  
/**
 * exporting values(config)
 */
  module.exports = config;