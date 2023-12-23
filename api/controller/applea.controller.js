const AppleaRouter = require('../../api/service/applea.service');
const AppleaService = {
    createn: async (applea, number) => {
        try {
            return await NotesRepository2.create(applea, number);
        } catch (error) {
            console.log('Error when you create notes', error.message);
            throw error;
        }
    }
};

module.exports = AppleaService;
