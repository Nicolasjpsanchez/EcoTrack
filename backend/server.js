import express from 'express';
import connectDB from './config/db.js';

const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());

// Additional middleware and routes setup here

// Start the server function
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

startServer();

export default app;
