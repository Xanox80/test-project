const Note3 = require('../../api/models/villa.model');

const NotesRepository3 = {
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
  }
  };
  
  module.exports = NotesRepository3;