const mongoose = require('mongoose');

const appleSchema = new mongoose.Schema({
  appeal: {
    type: String,
    required: true,
  },
  number:{
    type: Number,
    require: true
  }
  
});

const Appeal = mongoose.model('Applea', appleSchema);

module.exports = Appeal;
