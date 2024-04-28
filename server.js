import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectDB from './backend/config/db.js';

const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Goldfish App!');
});

// Additional middleware and routes setup here

// Function to start the server
const startServer = async () => {
    try {
        await connectDB(); // Connect to the database
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    } catch (error) {
        console.error('Failed to start the server:', error);
        process.exit(1); // Exit if server start fails
    }
};

// Call the function to start the server
startServer();

export default app;
