const Note2 = require('../../api/notes/aparments.model');

const NotesRepository2 = {
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
  }
  };
  
  module.exports = NotesRepository2;