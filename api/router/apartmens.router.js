const express = require('express');
const NOts2 = require('../../api/apartments/apartments.service');
const ApartRouter = express.Router();

ApartRouter.route('/api/cra').post(async (req, res) => {
    const { Name2, Surname2,price2,residence2 } = req.body; // Extract title and content from request body
    // console.log(Name2);
    // console.log(Surname2);
    // console.log(price2);
    // console.log(residence2);

    const result = await NOts2.createn(Name2, Surname2,price2,residence2);
    res.send(result);
});
ApartRouter.route('/api/getAllApartments').get(async (req, res) => { // Corrected route
    const result = await NOts2.getAllApartments();
    res.send(result);
});

ApartRouter.delete('/api/deleteApartment/:noteIda', async (req, res) => {
    try {
        const result = await NOts2.deleteApartments();  // Fix the function call
        res.json(result);
    } catch (error) {
        console.error('Error deleting notes:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
ApartRouter.patch('/api/updateApartment/:id', async (req, res) => {
    const noteId = req.params.id;  // Corrected from req.params.noteId to req.params.id
    const updatedData = req.body;
  
    try {
      const updatedApartments = await NOts2.updateApart(noteId, updatedData);
  
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
