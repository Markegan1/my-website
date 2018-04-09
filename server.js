// require our dependencies 
var express        = require('express');
var expressLayouts = require('express-ejs-layouts');
var bodyParser     = require ('body-parser');
var app            = express();


app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(bodyParser.urlencoded({extended: true}));

var router  = require('./app/routes');
app.use('/', router);



app.use(express.static(__dirname + '/public'));

var server = app.listen(8080, function(){
    console.log('app started');
});





   

