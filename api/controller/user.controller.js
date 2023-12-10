const UserRepository = require( '../service/user.service');
const UserService = {
  registerUser: async (username, password) => {
    try {
      return await UserRepository.registerUser(username, password);
    } catch (error) {
      console.error('Error in UserService.registerUser:', error.message);
      throw error; // rethrow the error to be caught by the calling function
    }
  },
  loginUser: async (username, password) => {
    try {
      return await UserRepository.loginUser(username, password);
    } catch (error) {
      console.error('Error in UserService.loginUser:', error.message);
      throw error;
    }
  },
};

module.exports = UserService;
