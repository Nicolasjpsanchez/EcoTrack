// Display a welcome message in the console
console.log('Welcome to EcoTrack!');

// Add an event listener to execute code when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select the start tracking button
    const startTrackingBtn = document.getElementById('start-tracking');

    // Add a click event listener to the start tracking button
    startTrackingBtn.addEventListener('click', function() {
        // Display a message when the start tracking button is clicked
        console.log('Start tracking button clicked!');
        
        // You can add more functionality here, such as displaying a modal or navigating to another page
    });
});

require('dotenv').config();  // Import and configure dotenv to load environment variables
const mongoose = require('mongoose');  // Import mongoose

// Construct the MongoDB connection string using environment variables
const dbURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));
