const NotesRepository = require('../../api/notes/notes.repository');
const NotesService = {
	createnot: async (Name, Surname, price, residence) => {
		try {
			return await NotesRepository.createNote(Name, Surname, price, residence);
		} catch (error) {
			console.log('Error when you create notes', error.message);
			throw error;
		}
	},

	getAllNote: async () => {
		try {
			return await NotesRepository.getAllNote();
		} catch (error) {
			console.log('Error when getting notes', error.message);
			throw error;
		}
	},
	deleteNote: async () => {
		try {
			return await NotesRepository.deleteNotes();
		} catch (error) {
			console.log('Error when deleting notes', error.message);
			throw error;
		}
	},
	updateNote: async (id, updatedData) => {
		try {
			return await NotesRepository.updateNote(id, updatedData);
		} catch (error) {
			console.log('Error when you create notes', error.message);
			throw error;
		}
	},
	updateNotes: async updates => {
		try {
			// updates - об'єкт, де ключі - це ідентифікатори записів, а значення - оновлені дані
			const updatePromises = Object.keys(updates).map(async id => {
				return NotesRepository.updateNote(id, updates[id]);
			});

			const updatedNotes = await Promise.all(updatePromises);
			return updatedNotes;
		} catch (error) {
			console.error('Error updating notes:', error.message);
			throw error;
		}
	},
};

module.exports = NotesService;
