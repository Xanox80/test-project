const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Surname: {
    type: String,
    required: true,
  },
  price:{
    type: Number,
    required: true,
  },
  residence: {
    type: String,
    required: true,
  }
});

const Note = mongoose.model('house', noteSchema);

module.exports = Note;
