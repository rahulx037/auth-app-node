const User = require('../models/usersModel');
const { doHash, doHashValidation, hmacProcess } = require('../utils/hashing');

exports.signup = async (req, res) => {
    try {
      // Check if the email already exists
      const existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) {
        return res.status(400).json({ error: 'Email already exists' });
      }
  
      // Hash the password
      const hashedPassword = await doHash(req.body.password, 12);
  
      // Create a new user
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
      });
      
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  exports.signin = async (req, res) => {
      try {
        // Check if the email exists
        const user = await User.findOne({ email: req.body.email }).select('+password');
        if (!user) {
          return res.status(401).json({ error: 'Invalid credentials' });
        }
    
        // Compare passwords
        const passwordMatch = await doHashValidation(req.body.password, user.password);
        if (!passwordMatch) {
          return res.status(401).json({ error: 'Invalid credentials' });
        }
    
        // Generate JWT token
        const token = jwt.sign({ email: user.email }, 'secret');
        res.cookie('Authorization', 'Bearer ' + token, {
				expires: new Date(Date.now() + 8 * 3600000)
			}).json({
				success: true,
				token,
				message: 'logged in successfully',
			});
        //res.status(200).json({ token });
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
    };

    exports.userDetail = async (req, res) => {
        try {
          // Fetch user details using decoded token
          const user = await User.findOne({ email: req.user.email });
          if (!user) {
            return res.status(404).json({ error: 'User not found' });
          }
          res.status(200).json({ username: user.username, email: user.email });
        } catch (error) {
          res.status(500).json({ error: 'Internal server error' });
        }
      };

    exports.signout = async (req, res) => {
        res
            .clearCookie('Authorization')
            .status(200)
            .json({ success: true, message: 'logged out successfully' });
    };
