const express = require('express');
const NOts2 = require('../../api/apartments/apartments.service');
const NotesRouter2 = express.Router();

NotesRouter2.route('/api/cra').post(async (req, res) => {
    const { Name2, Surname2,price2,residence2 } = req.body; // Extract title and content from request body
    // console.log(Name2);
    // console.log(Surname2);
    // console.log(price2);
    // console.log(residence2);

    const result = await NOts2.create(Name2, Surname2,price2,residence2);
    res.send(result);
});
NotesRouter2.route('/api/getAllApartments').get(async (req, res) => { // Corrected route
    const result = await NOts2.getAllApartments();
    res.send(result);
});

NotesRouter2.delete('/api/deleteApart/:noteIda', async (req, res) => {
    try {
        const result = await NOts2.deleteApartments();  // Fix the function call
        res.json(result);
    } catch (error) {
        console.error('Error deleting notes:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = NotesRouter2;
