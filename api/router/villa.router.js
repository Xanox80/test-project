const express = require('express');
const newvilla = require('../../api/villa/villa.service');
const VillaRouter = express.Router();

// create
VillaRouter.route('/api/create').post(async (req, res) => {
	const { name3, surname3, price3, residence3 } = req.body; // Extract title and content from request body

	const result = await newvilla.createnvilla(name3, surname3, price3, residence3);
	res.send(result);
});

//get
VillaRouter.route('/api/getAllVilla').get(async (req, res) => {
	// Corrected route
	const result = await newvilla.getAllVilla();
	res.send(result);
});

//delete
VillaRouter.delete('/api/deleteVilla/:noteIds', async (req, res) => {
	try {
		const result = await newvilla.deleteVilla(); // Fix the function call
		res.json(result);
	} catch (error) {
		console.error('Error deleting notes:', error.message);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

VillaRouter.patch('/api/updateVilla/:id', async (req, res) => {
	const noteId = req.params.id; // Corrected from req.params.noteId to req.params.id
	const updatedData = req.body;

	try {
		const updatedNote = await newvilla.updateVilla(noteId, updatedData);

		// Assuming you want to send the updated note back to the client
		res.json(updatedNote);
	} catch (error) {
		if (error.message === 'Note not found') {
			return res.status(404).json({ error: 'Note not found' });
		}

		console.error('Error updating note:', error.message);
		res.status(500).json({ error: 'Internal server error' });
	}
});
module.exports = VillaRouter;
