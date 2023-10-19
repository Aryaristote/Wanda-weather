// controllers/authController.js
const User = require('../models/User');

// Register or log in a user
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      // User doesn't exist, register the user
      user = await User.create({ email, password });
      return res.status(201).json({ message: 'User registered and logged in successfully', user });
    }

    // User exists, log in
    if (user.password === password) {
      return res.status(200).json({ message: 'Login successful', user });
    }

    // Incorrect password
    return res.status(401).json({ message: 'Authentication failed. Incorrect password.' });
  } catch (error) {
    console.error('Error while registering or logging in:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};
