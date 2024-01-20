const VillaRepository = require('../../api/villa/villa.repository');
const VillaService = {
	createVilla: async (nameVilla, surnameVilla, price, residence) => {
		try {
			return await VillaRepository.createVilla(
				nameVilla,
				surnameVilla,
				price,
				residence
			);
		} catch (error) {
			console.log('Error when you create notes', error.message);
			throw error;
		}
	},
	getAllVilla: async () => {
		try {
			return await VillaRepository.getAllVilla();
		} catch (error) {
			console.log('Error when getting Villa Photo', error.message);
			throw error;
		}
	},
	getPhotoVilla: async id => {
		try {
			return await VillaRepository.getPhotoVilla(id);
		} catch (error) {}
	},

	deleteVilla: async () => {
		try {
			return await VillaRepository.deleteVilla();
		} catch (error) {
			console.log('Error when deleting notes', error.message);
			throw error;
		}
	},
	updateVilla: async (id, updatedData) => {
		try {
			return await VillaRepository.updateVilla(id, updatedData);
		} catch (error) {
			console.log('Error when you create notes', error.message);
			throw error;
		}
	},

	// NotesRepository2.updateApart
	updateVillas: async updates => {
		try {
			// updates - об'єкт, де ключі - це ідентифікатори записів, а значення - оновлені дані
			const updatePromises = Object.keys(updates).map(async id => {
				return VillaRepository.updateVillas(id, updates[id]);
			});

			const updatedNotes = await Promise.all(updatePromises);
			return updatedNotes;
		} catch (error) {
			console.error('Error updating notes:', error.message);
			throw error;
		}
	},
};

module.exports = VillaService;
