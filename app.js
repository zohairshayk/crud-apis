const express = require('express')
const app = express();
const mongoose = require('./DB/mongoose'); 


app.listen(3000,() => {
    console.log('Listening at port 3000!')

});