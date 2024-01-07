const mongoose = require('mongoose');
const User = require('./api/models/user.model');
const Rooms = require('./api/models/aparments.model');
const Villa = require('./api/models/villa.model');
const Appeal = require('./api/models/appeal.model');

const connectDB = async () => {
	try {
		Appeal;
		Villa;
		Rooms;
		User;
		await mongoose.connect('mongodb://127.0.0.1:27017/baza', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log('Connected to MongoDB');
	} catch (error) {
		console.error('Error connecting to MongoDB:', error.message);
		process.exit(500); // Exit the process if unable to connect to the database
	}
};

module.exports = connectDB;
