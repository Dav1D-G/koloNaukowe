const amqp =  require('amqplib');


async function consumeMessage(){
 
const connection = await amqp.connect('amqp://localhost');
const channel = await connection.createChannel();

await channel.assertExchange('logExchange', 'direct');

const q = await channel.assertQueue("MessageQueue");

await channel.bindQueue(q.queue , "logExchange" , "Receiver");


channel.consume(q.queue , (msg)=>{
    const data = JSON.parse(msg.content);

    console.log(data);

    channel.ack(msg);
})


}



consumeMessage();