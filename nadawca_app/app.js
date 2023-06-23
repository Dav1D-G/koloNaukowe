const express = require('express');
const Producer = require('./producer');
const producer = new Producer();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');


dotenv.config({path : './config.env'});

const app = express();




app.use(bodyParser.json("application/json"));


app.post('/sendMessage' , async (req,res,next)=>{
    await producer.publishMessage(req.body.logType , req.body.message);

    res.send();

})

const PORT = process.env.PORT || 2000;


app.listen(PORT , ()=>{
    console.log(`Server has been launched at port ${PORT}`);
})