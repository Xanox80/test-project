const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
	nameRoom: {
		type: String,
		required: true,
	},
	surnameRoom: {
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
	photoRoom: {
		data: Buffer,
		type: String,
		required: false,
	},
});

// Assuming you have a Mongoose model named 'Note' for apartments
const Rooms = mongoose.model('apartments', RoomSchema);

module.exports = Rooms;
