const NotesRepository = require('../../api/service/notes.service');
const NotesService = {
    createnot: async (Name, Surname,price,residence) => {
        try {
            return await NotesRepository.createNote(Name, Surname,price,residence);
        } catch (error) {
            console.log('Error when you create notes', error.message);
            throw error;
        }
    },

    getAllNotes: async () => {

        try{
            return await NotesRepository.getAllNotes();

        }catch (error) {
            console.log('Error when getting notes', error.message)
            throw error;
        }
    },
    deleteNotes: async () => {
        try{
            return await NotesRepository.deleteNotes();

        }catch(error) {
            console.log('Error when deleting notes', error.message)
            throw error;
        }
    },
};

module.exports = NotesService;
