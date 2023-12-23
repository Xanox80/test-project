const mongoose = require('mongoose');

const noteSchema2 = new mongoose.Schema({
    Name2: {
        type: String,
        required: true,
    },
    Surname2: {
        type: String,
        required: true,
    },
    price2: {
        type: Number,
        required: true, // Corrected from 'required2'
    },
    residence2: {
        type: String,
        required: true,
    }
});

// Assuming you have a Mongoose model named 'Note' for apartments
const Note2 = mongoose.model('apartments', noteSchema2);

module.exports = Note2;
