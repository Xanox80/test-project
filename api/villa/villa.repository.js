const Villa = require('../../api/models/villa.model');

const VillaRepository = {
	createVilla: async (nameVilla, surnameVilla, price, residence, photo) => {
		try {
			const newVilla = new Villa({
				nameVilla,
				surnameVilla,
				price,
				residence,
				photo,
			});

			await newVilla.save();

			return { success: true, message: 'Note created successfully!' };
		} catch (error) {
			console.error('Error creating note:', error.message);
			return { success: false, message: 'Internal server error' };
		}
	},
	getAllVilla: async () => {
		try {
			return await Villa.find();
		} catch (error) {
			console.error('Error getting: ', error.message);
			return { success: false, message: 'Internal server error' };
		}
	},

	deleteVilla: async () => {
		try {
			return await Villa.deleteMany({}); // Use deleteMany to delete all documents
		} catch (error) {
			console.log('Error deleting notes:', error.message);
			throw error;
		}
	},

	updateVilla: async (id, updatedData) => {
		try {
			console.log(`Updating note with ID: ${id}`);
			updatedData.price = Number(updatedData.price);
			const updatedVilla = await Villa.findByIdAndUpdate(id, updatedData, {
				new: true,
			});

			if (!updatedVilla) {
				throw new Error('Note not found');
			}

			console.log('Note updated successfully:', updatedVilla);
			return updatedVilla;
		} catch (error) {
			console.error('Error updating note:', error.message);
			throw error;
		}
	},
};

module.exports = VillaRepository;
