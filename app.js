const express = require('express');
var debug = require('debug')('app');
var morgan = require('morgan');
var path = require('path');
var chalk = require('chalk');

var app = express();
const port = process.env.PORT || 3000;
const bookRouter = require('./src/routes/bookRoutes');

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

 


app.use('/books', bookRouter)
app.get('/', (req, res) => {
    res.render(
        'index',
        { 
         nav: [{link:'/books', title:'Books'},
         {link: '/authors', title:'Authors'}],
         title: 'Library'
        }
    );
});

app.listen(port, () =>
    console.log('Listening on port 3000...'));