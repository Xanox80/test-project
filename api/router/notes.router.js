const express = require('express');

const NOts = require('../../api/service/notes.service');
const NotesRouter = express.Router();


//create
NotesRouter.route('/api/cr').post(async (req, res) => {
    const { Name, Surname, price, residence } = req.body;
    const result = await NOts.createNote(Name, Surname, price, residence);
    res.send(result);
});

//get
NotesRouter.route('/api/getAllNotes').get(async (req, res) => { // Corrected route
    const result = await NOts.getAllNotes();
    res.send(result);
});

//delete
// Replace NotesRepository with NOts
NotesRouter.delete('/api/deleteNote/:noteId', async (req, res) => {
    try {
        const result = await NOts.deleteNotes();  // Fix the function call
        res.json(result);
    } catch (error) {
        console.error('Error deleting notes:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports = NotesRouter;
