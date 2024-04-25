// app.js for Node.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// MongoDB connection
const dbURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

// Initialize Express application
const app = express();

// Middleware setup
app.use(express.json());
// Example of adding a route file (make sure to create this if it doesn't exist)
// const routeFile = require('./routes/api'); // adjust path and filename as necessary
// app.use('/api/routes', routeFile);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

require('dotenv').config(); // This should be the first line in your main file or database config file

const mongoose = require('mongoose');
const dbURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

