const mongoose = require('mongoose');

const ViilaSchema = new mongoose.Schema({
	nameVilla: {
		type: String,
		required: true,
	},
	surnameVilla: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true, // Corrected from 'required2'
	},
	residence: {
		type: String,
		required: true,
	},
});

// Assuming you have a Mongoose model named 'Note' for apartments
const Villa = mongoose.model('villa', ViilaSchema);

module.exports = Villa;
