//import mongoose
const mongoose = require('mongoose');

//trea schema
const BookSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    title: String,
    image: String,
    description: String,
    keywords: String,
    pages: Number,
    comments: [
        {
            text: String,
            date: {
                tyype: String,
                default: new Date()
            }
        }
    ]
});

//convert to model Book
const Book = mongoose.model('Book', BookSchema);
//export for controller use
module.exports = Book;