const mongoose = require('mongoose');

const noteSchema3 = new mongoose.Schema({
	name3: {
		type: String,
		required: true,
	},
	surname3: {
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
	},
});

// Assuming you have a Mongoose model named 'Note' for apartments
const Villa = mongoose.model('villa', noteSchema3);

module.exports = Villa;
