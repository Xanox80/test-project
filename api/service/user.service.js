const bcrypt = require('bcrypt');
const User = require('../../api/models/user.model');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const UserRepository = {
  registerUser: async (username, password) => {
    try {
      const newUser = new User({ username, password: password });
      await newUser.save();

      return { success: true, message: 'User registered successfully!' };
    } catch (error) {
      console.error('Error registering user:', error.message);
      return { success: false, message: 'Register error'};
    }
  },
  loginUser: async (username, password) => {
    try {
      const user = await User.findOne({ username });

      if (!user) {
        return { success: false, message: 'User not found' };
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return { success: false, message: 'Invalid password' };
      }

      const token = jwt.sign({ userId: user._id }, process.env.TOKEN_SECRET, { expiresIn: '1h' });

      return { success: true, token: token, message: 'Login success!' };
    } catch (error) {
      console.error('Error during login:', error.message);
      return { success: false, message: 'Error during login'};
    }
  },
};

module.exports = UserRepository;
