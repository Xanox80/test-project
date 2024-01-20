const mongoose = require('mongoose');

const appealSchema = new mongoose.Schema({
	appeal: {
		type: String,
		required: true,
	},
	number: {
		type: Number,
		require: true,
	},
});

const Appeal = mongoose.model('Applea', appealSchema);

module.exports = Appeal;
