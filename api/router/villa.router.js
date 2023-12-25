const express = require('express');
const NOts3 = require('../../api/villa/villa.service');
const NotesRouter3 = express.Router();

// create
NotesRouter3.route('/api/create').post(async (req, res) => {
    const { Name3, Surname3,price3,residence3 } = req.body; // Extract title and content from request body
    // console.log(Name2);
    // console.log(Surname2);
    // console.log(price2);
    // console.log(residence2);

    const result = await NOts3.create(Name3, Surname3,price3,residence3);
    res.send(result);
});

//get
NotesRouter3.route('/api/getAllVilla').get(async (req, res) => { // Corrected route
    const result = await NOts3.getAllVilla();
    res.send(result);
});

//delete
NotesRouter3.delete('/api/deleteVilla/:noteIds', async (req, res) => {
    try {
        const result = await NOts3.deleteVilla();  // Fix the function call
        res.json(result);
    } catch (error) {
        console.error('Error deleting notes:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
module.exports = NotesRouter3;
