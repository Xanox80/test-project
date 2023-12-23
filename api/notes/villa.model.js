const mongoose = require('mongoose');

const noteSchema3 = new mongoose.Schema({
    Name3: {
        type: String,
        required: true,
    },
    Surname3: {
        type: String,
        required: true,
    },
    price3: {
        type: Number,
        required: true, // Corrected from 'required2'
    },
    residence3: {
        type: String,
        required: true,
    }
});

// Assuming you have a Mongoose model named 'Note' for apartments
const Note3 = mongoose.model('villa', noteSchema3);

module.exports = Note3;
