var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BookSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    book_name : String,
    book_author : String,
    book_price: Number,
    location: String,
    no_of_pages : Number,
    edition : String
});
module.exports = mongoose.model('Book', BookSchema);