const amqp = require('amqplib');

const obj = {
    rabbitMQ : {
        url : "amqp://localhost",
        exchangeName : "logExchange",
    },
};


class Producer {
    channel;


    async createChannel(){
        try{
            const connection = await amqp.connect(obj.rabbitMQ.url);
            this.channel = await connection.createChannel();
        }
        catch(err)
        {
            console.log(err);
        }
        
    }
    async publishMessage(routingKey,message)
    {
        try{
            if(!this.channel)
            await this.createChannel();
    
            const exchangeName = obj.rabbitMQ.exchangeName;
    
            await this.channel.assertExchange(exchangeName, 'direct');
    
            await this.channel.publish(exchangeName , routingKey , Buffer.from(JSON.stringify({
                logType : routingKey,
                message ,
                dateTime : new Date(),
            })));
    
    
            console.log(`The message ${message} has been sended to the another app :)`);
        }
        catch(err)
        {
            console.log(err);
        }
        
    }
}


module.exports = Producer;
