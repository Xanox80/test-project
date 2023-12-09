const bcrypt = require('bcrypt');
const User = require('../../models/user.model');
const jwt = require('jsonwebtoken');
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Handle the error appropriately, e.g., log it or send an alert
});

const UserRepository = {


registerUser: async (username, password) => {
  process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    // Handle the error appropriately, e.g., log it or send an alert
  });
  
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    return { message: 'User registered successfully' };
  } catch (error) {
    console.error('Error registering user:', error.message);
    throw error;
  }
  
},
loginUser: async (username, password) => {
  try {
    // Find the user by username
    const user = await User.findOne({ username });

    if (!user) {
      throw { success: false, message: 'Invalid username or password' };
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw { success: false, message: 'Invalid username or password' };
    }

    // Create a JWT token
    const token = jwt.sign({ userId: user._id }, config.jwtSecret, { expiresIn: '1h' });

    return { token };
  } catch (error) {
    console.error('Error during login:', error.message);
    throw error;
  }
},



}
module.exports = UserRepository;