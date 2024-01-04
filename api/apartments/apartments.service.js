const ApartRepository = require('../../api/apartments/apartments.repository');
const ApartService = {
    createn: async (Name2, Surname2,price2,residence2) => {
        try {
            return await ApartRepository.create(Name2, Surname2,price2,residence2);
        } catch (error) {
            console.log('Error when you create notes', error.message);
            throw error;
        }
    },
    getAllApartments: async () => {

        try{
            return await ApartRepository.getAllApartments();

        }catch (error) {
            console.log('Error when getting notes', error.message)
            throw error;
        }
    },


    deleteApartments: async () => {
        try{
            return await ApartRepository.deleteApartments();

        }catch(error) {
            console.log('Error when deleting notes', error.message)
            throw error;
        }
    },
    updateApart: async (id, updatedData) => {
        try {
            return await ApartRepository.updateApart(id, updatedData);
        } catch (error) {
            console.log('Error when you create notes', error.message);
            throw error;
        }
    },
      
      // NotesRepository2.updateApart
      updateAparts: async (updates) => {
        try {
            // updates - об'єкт, де ключі - це ідентифікатори записів, а значення - оновлені дані
            const updatePromises = Object.keys(updates).map(async (id) => {
                return ApartRepository.updateAparts(id, updates[id]);
            });
    
            const updatedNotes = await Promise.all(updatePromises);
            return updatedNotes;
        } catch (error) {
            console.error('Error updating notes:', error.message);
            throw error;
        }
    }
};



module.exports = ApartService;
