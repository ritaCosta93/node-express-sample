const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.listen(3000);

app.use(bodyparser.json({extended:false}))

app.get('/',(req,res,next) =>{
    res.send("success");
})