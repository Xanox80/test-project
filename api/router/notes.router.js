const express = require('express');

const NOts = require('../../api/notes/notes.service');
const NotesRouter = express.Router();

//create
NotesRouter.route('/api/creathouse').post(async (req, res) => {
	const { Name, Surname, price, residence } = req.body;
	const result = await NOts.createnot(Name, Surname, price, residence);
	res.send(result);
});

//get
NotesRouter.route('/api/getAllNotes').get(async (req, res) => {
	// Corrected route
	const result = await NOts.getAllNote();
	res.send(result);
});

//delete
// Replace NotesRepository with NOts
NotesRouter.delete('/api/deleteNote/:noteId', async (req, res) => {
	try {
		const result = await NOts.deleteNote(); // Fix the function call
		res.json(result);
	} catch (error) {
		console.error('Error deleting notes:', error.message);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

NotesRouter.patch('/api/updatahouse/:id', async (req, res) => {
	const noteId = req.params.id; // Corrected from req.params.noteId to req.params.id
	const updatedData = req.body;

	try {
		const updatedNote = await NOts.updateNote(noteId, updatedData);

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
module.exports = NotesRouter;
