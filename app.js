var express = require('express');
var debug = require('debug')('app');
var morgan = require('morgan');
var path = require('path');
var chalk = require('chalk');

var app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,'/views/index.html'));
})

app.listen(3000, function(){
    console.log('Listening on port 3000...');
})