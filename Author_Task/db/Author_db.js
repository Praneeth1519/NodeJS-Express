var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AuthorSchema = new Schema({
	fname: String,
    lname: String,
    email: {type: String, unique:true},
    password: String,
    qualification: String,
    domain: String,
    awards: String,
    gender: String,
    visibility: {type: Number, default: 0}
});

module.exports = mongoose.model('AuthorSchema', AuthorSchema);