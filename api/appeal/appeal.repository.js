const Appeal = require('../../api/models/appeal.model');

const AppealRepository = {
	createAppeal: async (appeal, number) => {
		try {
			const newAppeal = new Appeal({
				appeal,
				number,
			});

			await newAppeal.save();

			return { success: true, message: 'Note created successfully!' };
		} catch (error) {
			console.error('Error creating note:', error.message);
			return { success: false, message: 'Internal server error' };
		}
	},
};

module.exports = AppealRepository;
