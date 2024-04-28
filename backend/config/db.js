// db.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const connectDB = async () => {
    // Construct the MongoDB URI
    const dbURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
    console.log('Attempting to connect to MongoDB...');  // Debugging statement

    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1);  // Exit if database connection fails
    }
};

export default connectDB;

// Proper handling of closing the MongoDB connection when the Node process ends
process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log('MongoDB connection closed due to app termination');
    process.exit(0);
});

// Additional signal handling for graceful shutdown
process.on('SIGTERM', async () => {
    await mongoose.connection.close();
    console.log('MongoDB connection closed due to app termination (SIGTERM)');
    process.exit(0);
});
