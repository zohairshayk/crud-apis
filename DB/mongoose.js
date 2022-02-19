const mongoose = require('mongoose');

mongoose.Promise=global.Promise; //helps perform asynchronous operations/request btw js and mongodb

mongoose.connect('mongodb://127.0.0.1:27017/taskmanagerdb')//url(mongodb://local ip/collectionname)
.then(()=>{
    console.log('MongoDb Connected Sucessfully')})// if connected then perform this block
.catch((error)=>{
    console.log(error)
});// if any error do this

//export mongoose to use it elsewhere by importing it into other js files.
module.exports = mongoose;