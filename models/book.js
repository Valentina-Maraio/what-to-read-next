//import mongoose
const mongoose = require('mongoose');

//trea schema
const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    image: String,
    description: String,
    pages: Number,
    language: String,
});

//convert to model Book
const Book = mongoose.model('Book', BookSchema);
//export for controller use
module.exports = Book;