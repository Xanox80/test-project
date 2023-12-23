const NotesRepository3 = require('../../api/service/villa.service');
const NotesService3 = {
    createn: async (Name3, Surname3,price3,residence3) => {
        try {
            return await NotesRepository3.create(Name3, Surname3,price3,residence3);
        } catch (error) {
            console.log('Error when you create notes', error.message);
            throw error;
        }
    },
    getAllVilla: async () => {

        try{
            return await NotesRepository.getAllVilla();

        }catch (error) {
            console.log('Error when getting notes', error.message)
            throw error;
        }
    },

    deleteVilla: async () => {
        try{
            return await NotesRepository3.deleteVilla();

        }catch(error) {
            console.log('Error when deleting notes', error.message)
            throw error;
        }
    },
};

module.exports = NotesService3;
