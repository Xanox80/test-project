const Note3 = require('../../api/models/villa.model');

const VillaRepository = {
    create: async (Name3, Surname3,price3,residence3 ) => {
      try {
       
        const newNote3 = new Note3({
          Name3,
          Surname3,
          price3,
          residence3,
          
        });

        await newNote3.save();
  
        return { success: true, message: 'Note created successfully!' };
      } catch (error) {
        console.error('Error creating note:', error.message);
        return { success: false, message: 'Internal server error' };
      }
    },
    getAllVilla: async () => {

      try{
  
       return await Note3.find();
        
  
      }catch( error){
        console.error('Error getting: ', error.message);
        return {success: false, message: 'Internal server error'};
      }
    },

    deleteVilla: async () => {
      try {
          return await Note3.deleteMany({}); // Use deleteMany to delete all documents
      } catch (error) {
          console.log('Error deleting notes:', error.message);
          throw error;
      }
  },

  updateVilla: async (id, updatedData) => {
    try {
      console.log(`Updating note with ID: ${id}`);
      updatedData.price = Number(updatedData.price);
      const updatedVilla = await Note3.findByIdAndUpdate(id, updatedData, { new: true });
  
      if (!updatedVilla ) {
        throw new Error('Note not found');
      }
  
      console.log('Note updated successfully:', updatedVilla );
      return updatedVilla ;
    } catch (error) {
      console.error('Error updating note:', error.message);
      throw error;
    }
  },
  };
  
  module.exports = VillaRepository;