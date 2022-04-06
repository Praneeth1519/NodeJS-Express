var express = require('express');
var mongoose = require('mongoose');
var connect_db = 'mongodb://localhost/app';

mongoose.connect(connect_db);

var app1 = express();
var app2 = express();

var Post = require('./js/Post');
var Author = require('./js/Author');

app1.use(express.json())
app2.use(express.json())

app1.use('/Post', Post);
app2.use('/Author', Author);

app1.listen(3030, function(){
    console.log('PostMS running on port: 3030');
});
app2.listen(3031, function(){
    console.log('AuthorMS running on port: 3031');
});