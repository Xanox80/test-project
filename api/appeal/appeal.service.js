const AppealRepository = require('./appeal.repository');
const AppealService = {
	createn: async (applea, number) => {
		try {
			return await AppealRepository.createApplea(applea, number);
		} catch (error) {
			console.log('Error when you create notes', error.message);
			throw error;
		}
	},
};

module.exports = AppealService;
