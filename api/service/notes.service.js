const Note = require('../../api/notes/notes.model');


const NotesRepository = {
    createNote: async (Name, Surname,price,residence ) => {
      try {
       
        const newNote = new Note({
          Name,
          Surname,
          price,
          residence,
          
        });

        await newNote.save();
  
        return { success: true, message: 'Note created successfully!' };
      } catch (error) {
        console.error('Error creating note:', error.message);
        return { success: false, message: 'Internal server error' };
      }
    },

    getAllNotes: async () => {

      try{
  
       return await Note.find();
        
  
      }catch( error){
        console.error('Error getting: ', error.message);
        return {success: false, message: 'Internal server error'};
      }
    },

   deleteNotes: async () => {
        try {
            return await Note.deleteMany({}); // Use deleteMany to delete all documents
        } catch (error) {
            console.log('Error deleting notes:', error.message);
            throw error;
        }
    }

  };

  
  module.exports = NotesRepository;