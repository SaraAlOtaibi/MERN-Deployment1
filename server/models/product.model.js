const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, "Name is required"],
        minlength: [3, 'author name should be 3 characters or more']
    },
}, { timestamps: true });

module.exports.Author = mongoose.model('Author', AuthorSchema);
