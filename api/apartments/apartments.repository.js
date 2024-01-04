const Note2 = require('../../api/models/aparments.model');

const ApartRepository = {
    create: async (Name2, Surname2,price2,residence2 ) => {
      try {
        
        const newNote2 = new Note2({
          Name2,
          Surname2,
          price2,
          residence2,
          
        });

        await newNote2.save();
  
        return { success: true, message: 'Note created successfully!' };
      } catch (error) {
        console.error('Error creating note:', error.message);
        return { success: false, message: 'Internal server error' };
      }
    },
    getAllApartments: async () => {

      try{
  
       return await Note2.find();
        
  
      }catch( error){
        console.error('Error getting: ', error.message);
        return {success: false, message: 'Internal server error'};
      }
    },

    deleteApartments: async () => {
      try {
          return await Note2.deleteMany({}); // Use deleteMany to delete all documents
      } catch (error) {
          console.log('Error deleting notes:', error.message);
          throw error;
      }
  },
 updateApart: async (id, updatedData) => {
    try {
      console.log(`Updating note with ID: ${id}`);
      updatedData.price = Number(updatedData.price);
      const updatedApartes = await Note2.findByIdAndUpdate(id, updatedData, { new: true });
  
      if (!updatedApartes) {
        throw new Error('Note not found');
      }
  
      console.log('Note updated successfully:', updatedApartes);
      return updatedApartes;
    } catch (error) {
      console.error('Error updating note:', error.message);
      throw error;
    }
  },
  };
  
  module.exports = ApartRepository ;