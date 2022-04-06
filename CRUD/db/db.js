var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SMschema = new Schema({
	pname: String,
	pid: Number,
	quantity: Number,
	price: Number
});

module.exports = mongoose.model('SuperMarket', SMschema);