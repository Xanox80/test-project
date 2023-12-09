const UserRepository = require( '../repository/user.repository');

const UserService = {
  login: async (username, password) =>{
    return await UserRepository.loginUser(username,password);
  }
};

module.exports = UserService;
