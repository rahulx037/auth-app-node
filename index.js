// Importing required modules
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authRouter = require('./routers/authRouter');
const taskRouter = require('./routers/taskRouter');

// Creating an Express application instance
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


// Connect to MongoDB database
mongoose.connect(process.env.MONGODB ?? "mongodb://localhost:27017/short-url")
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});


  app.use('/api/auth', authRouter);
  app.use('/api/tasks', taskRouter);
  
  // Default route
  app.get('/', (req, res) => {
    res.send('Welcome to my User Registration and Login API!');
  });
  
  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

