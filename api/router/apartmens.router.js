const express = require('express');
const newroom = require('../../api/apartments/apartments.service');
const ApartRouter = express.Router();

ApartRouter.route('/api/cra').post(async (req, res) => {
	const { name2, surname2, price2, residence2 } = req.body; // Extract title and content from request body

	const result = await newroom.creatroom(name2, surname2, price2, residence2);
	res.send(result);
});
ApartRouter.route('/api/getAllroom').get(async (req, res) => {
	// Corrected routea
	const result = await newroom.getAllApartments();
	res.send(result);
});

ApartRouter.delete('/api/deleterooms/:noteIda', async (req, res) => {
	try {
		const result = await newroom.deleteApartments(); // Fix the function call
		res.json(result);
	} catch (error) {
		console.error('Error deleting notes:', error.message);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});
ApartRouter.patch('/api/updatarooms/:id', async (req, res) => {
	const noteId = req.params.id; // Corrected from req.params.noteId to req.params.id
	const updatedData = req.body;

	try {
		const updatedApartments = await newroom.updateApartment(noteId, updatedData);

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
