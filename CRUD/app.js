var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = 8080;
var db = 'mongodb://localhost/crud';

var superMarket = require('./routes/superMarket');

mongoose.connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/superMarket', superMarket);

app.listen(port, function(){
    console.log('app listening on port: '+port);
});