const Rooms = require('../../api/models/aparments.model');

const ApartRepository = {
	createroom: async (name2, surname2, price2, residence2) => {
		try {
			const newroom = new Rooms({
				name2,
				surname2,
				price2,
				residence2,
			});

			await newroom.save();

			return { success: true, message: 'Note created successfully!' };
		} catch (error) {
			console.error('Error creating note:', error.message);
			return { success: false, message: 'Internal server error' };
		}
	},
	getAllRoom: async () => {
		try {
			return await Rooms.find();
		} catch (error) {
			console.error('Error getting: ', error.message);
			return { success: false, message: 'Internal server error' };
		}
	},

	deleteRoom: async () => {
		try {
			return await Rooms.deleteMany({}); // Use deleteMany to delete all documents
		} catch (error) {
			console.log('Error deleting notes:', error.message);
			throw error;
		}
	},
	updateRoom: async (id, updatedData) => {
		try {
			console.log(`Updating note with ID: ${id}`);
			updatedData.price = Number(updatedData.price);
			const updatedApartes = await Rooms.findByIdAndUpdate(id, updatedData, {
				new: true,
			});

			if (!updatedApartes) {
				throw new Error('Note not found');
			}

			console.log('Note updated successfully:', updatedApartes);
			return updatedApartes;
		} catch (error) {
			console.error('Error updating note:', error.message);
			throw error;
		}
	},
};

module.exports = ApartRepository;
