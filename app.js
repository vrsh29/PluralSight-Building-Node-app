var express = require('express');
var debug = require('debug')('app');
var morgan = require('morgan');
var chalk = require('chalk');

var app = express();

app.use(morgan('tiny'));

app.get('/', function(req, res){
    res.sendFile(__dirname,'/views/index.html');
})

app.listen(3000, function(){
    console.log('Listening on port 3000...');
})