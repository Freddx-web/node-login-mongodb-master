//https://javascript.plainenglish.io/node-js-models-and-database-3836f0c7f2da

var express = require('express');
var app = express();
const mongoose = require('mongoose');
//Routes
app.get('/', function (req, res) {
    res.send('Hello World!');
});
//Database
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
const conexion_db = mongoose.connection.once('open',function(){
    console.log('Database connected Successfully');
}).on('error',function(err){
    console.log('Error', err);
})
app.listen(8000, function () {
    console.log('Listening to Port 8000');
});