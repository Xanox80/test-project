const NotesRepository2 = require('../../api/apartments/apartments.repository');
const NotesService2 = {
    createn: async (Name2, Surname2,price2,residence2) => {
        try {
            return await NotesRepository2.create(Name2, Surname2,price2,residence2);
        } catch (error) {
            console.log('Error when you create notes', error.message);
            throw error;
        }
    },
    getAllApartments: async () => {

        try{
            return await NotesRepository2.getAllApartments();

        }catch (error) {
            console.log('Error when getting notes', error.message)
            throw error;
        }
    },


    deleteApartments: async () => {
        try{
            return await NotesRepository2.deleteApartments();

        }catch(error) {
            console.log('Error when deleting notes', error.message)
            throw error;
        }
    },

};

module.exports = NotesService2;
