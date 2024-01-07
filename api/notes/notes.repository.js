const Note = require('../../api/models/notes.model');

const NotesRepository = {
	createNote: async (Name, Surname, price, residence) => {
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

	getAllNote: async () => {
		try {
			return await Note.find();
		} catch (error) {
			console.error('Error getting: ', error.message);
			return { success: false, message: 'Internal server error' };
		}
	},

	deleteNotes: async () => {
		try {
			return await Note.deleteMany({}); // Use deleteMany to delete all documents
		} catch (error) {
			console.log('Error deleting notes:', error.message);
			throw error;
		}
	},

	updateNote: async (id, updatedData) => {
		try {
			console.log(`Updating note with ID: ${id}`);
			updatedData.price = Number(updatedData.price);
			const updatedNote = await Note.findByIdAndUpdate(id, updatedData, {
				new: true,
			});

			if (!updatedNote) {
				throw new Error('Note not found');
			}

			console.log('Note updated successfully:', updatedNote);
			return updatedNote;
		} catch (error) {
			console.error('Error updating note:', error.message);
			throw error;
		}
	},
};

module.exports = NotesRepository;
