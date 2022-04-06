var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
	title: String,
    description: String,
    created_date: String,
    updated_date: String,
    visibility: String,
    author_id: { 
    type: Schema.Types.ObjectId,
    ref: 'AuthorSchema'},
});

module.exports = mongoose.model('PostSchema', PostSchema);