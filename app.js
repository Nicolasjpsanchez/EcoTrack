// Load environment variables first
require('dotenv').config();

// After loading the environment variables, require other modules
const express = require('express');
const mongoose = require('mongoose');
const path = require('path'); // Ensure path is defined

// Initialize Express
const app = express();

// Connect to MongoDB
const dbURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'frontend')));

// Define the root route once
app.get('/', (req, res) => {
  res.send('Welcome to EcoTrack.com');
});

// Start the server on the appropriate port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
