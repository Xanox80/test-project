const AppealRepository = require('./appeal.repository');
const AppealService = {
	createAppeal: async (appeal, number) => {
		try {
			return await AppealRepository.createAppeal(appeal, number);
		} catch (error) {
			console.log('Error when you create notes', error.message);
			throw error;
		}
	},
};

module.exports = AppealService;
