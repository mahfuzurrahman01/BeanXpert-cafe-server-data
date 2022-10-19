const express = require('express');
const cors = require('cors')
const data = require ('./Data/coffee.json')
const app = express();
app.use(cors())
const port = process.env.PORT || 5000;
app.get('/',(req,res)=>{
    res.send('Assalamoalaikom everyone')
})
app.get('/products',(req,res)=>{
    res.send(data)
})
app.listen(port,()=>{
    console.log(`This is running from port ${port}`)
})