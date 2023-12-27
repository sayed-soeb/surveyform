// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

require('dotenv').config();

//Connecting to mongodb
mongoose.connect(process.env.DbUrl,{
    useUnifiedTopology:true,
    useNewUrlParser:true
});

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB');
});

// User Schema
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Survey Schema
const surveySchema = new mongoose.Schema({
  name: String,
  gender: String,
  nationality: String,
  email: String,
  phoneNumber: String,
  address: String,
  message: String,
});

const Survey = mongoose.model('Survey', surveySchema);

// Signup API
app.post('/api/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Login API
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare hashed passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Create a new survey API
app.post('/api/surveys', async (req, res) => {
    try {
      const { name, gender, nationality, email, phoneNumber, address, message } = req.body;
  
      // Create a new survey
      const newSurvey = new Survey({
        name,
        gender,
        nationality,
        email,
        phoneNumber,
        address,
        message,
      });
  
      // Save the survey to the database
      await newSurvey.save();
  
      res.status(201).json({ message: 'Survey submitted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

// Get list of surveys API
app.get('/api/surveys', async (req, res) => {
  try {
    const surveys = await Survey.find({}, 'name');
    res.status(200).json(surveys);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Get survey details by ID API
app.get('/api/surveys/:id', async (req, res) => {
  try {
    const survey = await Survey.findById(req.params.id);
    if (survey) {
      res.status(200).json(survey);
    } else {
      res.status(404).json({ message: 'Survey not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.delete('/api/surveys/:id', async (req, res) => {
  const surveyId = req.params.id;
  try {
    await Survey.findByIdAndDelete(surveyId);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
