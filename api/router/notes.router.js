const express = require('express');
const multer = require('multer');
const storage = multer.memoryStorage();
const Nots = require('../../api/notes/notes.service');
const NotesRouter = express.Router();
// const upload = multer({ storage: storage });

//create
NotesRouter.route('/api/creatNote').post(async (req, res) => {
	const { Name, Surname, price, residence, photo } = req.body;
	const result = await Nots.createNote(Name, Surname, price, residence, photo);
	res.send(result);
});

//get
NotesRouter.route('/api/getAllNotes').get(async (req, res) => {
	// Corrected route
	const result = await Nots.getAllNote();
	res.send(result);
});

// get photo by id
NotesRouter.route('/api/getPhoto/:id').get(async (req, res) => {
	const result = await Nots.getPhoto(req.params.id);
	res.send(result);
});

//delete
// Replace NotesRepository with NOts
NotesRouter.delete('/api/deleteNote/:noteId', async (req, res) => {
	try {
		const result = await Nots.deleteNote(); // Fix the function call
		res.json(result);
	} catch (error) {
		console.error('Error deleting notes:', error.message);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

NotesRouter.patch('/api/updateNote/:id', async (req, res) => {
	const noteId = req.params.id; // Corrected from req.params.noteId to req.params.id
	const updatedData = req.body;

	try {
		const updatedNote = await Nots.updateNote(noteId, updatedData);

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
