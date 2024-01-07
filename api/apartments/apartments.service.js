const ApartRepository = require('../../api/apartments/apartments.repository');
const ApartService = {
	creatroom: async (name2, surname2, price2, residence2) => {
		try {
			return await ApartRepository.createroom(name2, surname2, price2, residence2);
		} catch (error) {
			console.log('Error when you create notes', error.message);
			throw error;
		}
	},

	getAllApartments: async () => {
		try {
			return await ApartRepository.getAllRoom();
		} catch (error) {
			console.log('Error when getting notes', error.message);
			throw error;
		}
	},

	deleteApartments: async () => {
		try {
			return await ApartRepository.deleteRoom();
		} catch (error) {
			console.log('Error when deleting notes', error.message);
			throw error;
		}
	},
	updateApartment: async (id, updatedData) => {
		try {
			return await ApartRepository.updateRoom(id, updatedData);
		} catch (error) {
			console.log('Error when you create notes', error.message);
			throw error;
		}
	},

	// NotesRepository2.updateApart
	updateAparts: async updates => {
		try {
			const updatePromises = Object.entries(updates).map(async ([id, data]) => {
				return ApartRepository.updateRoom(id, data);
			});

			const updatedApartments = await Promise.all(updatePromises);
			return updatedApartments;
		} catch (error) {
			console.error('Error updating apartments:', error.message);
			throw error;
		}
	},
};

module.exports = ApartService;
