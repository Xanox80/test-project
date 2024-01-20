const express = require('express');
const newRoom = require('../../api/apartments/apartments.service');
const ApartRouter = express.Router();

ApartRouter.route('/api/createApartament').post(async (req, res) => {
	const { nameRoom, surnameRoom, price, residence, photoRoom } = req.body; // Extract title and content from request body

	const result = await newRoom.creatRoom(
		nameRoom,
		surnameRoom,
		price,
		residence,
		photoRoom
	);
	res.send(result);
});

ApartRouter.route('/api/getPhotoApartament/:id').get(async (req, res) => {
	const result = await newRoom.getPhotoRoom();
	res.send(result);
});

ApartRouter.route('/api/getAllRoom').get(async (req, res) => {
	// Corrected routea
	const result = await newRoom.getAllApartments();
	res.send(result);
});

ApartRouter.delete('/api/deleterooms/:noteIda', async (req, res) => {
	try {
		const result = await newRoom.deleteApartments(); // Fix the function call
		res.json(result);
	} catch (error) {
		console.error('Error deleting notes:', error.message);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});
ApartRouter.patch('/api/updatrooms/:id', async (req, res) => {
	const noteId = req.params.id; // Corrected from req.params.noteId to req.params.id
	const updatedData = req.body;

	try {
		const updatedApartments = await newRoom.updateApartment(noteId, updatedData);

		// Assuming you want to send the updated note back to the client
		res.json(updatedApartments);
	} catch (error) {
		if (error.message === 'Note not found') {
			return res.status(404).json({ error: 'Note not found' });
		}

		console.error('Error updating note:', error.message);
		res.status(500).json({ error: 'Internal server error' });
	}
});

module.exports = ApartRouter;
