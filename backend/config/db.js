import mongoose from 'mongoose';

// It's better to build the URI inside the connectDB function to ensure the environment variables are loaded when this function is called.
const connectDB = async () => {
    // Construct the MongoDB URI
    const dbURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
    console.log(dbURI);  // Debugging: Output the MongoDB connection string to check correctness

    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1);  // Ensuring the application does not run if there is no database connection
    }
};

export default connectDB;

// Proper handling of closing the MongoDB connection when the Node process ends
process.on('SIGINT', async () => {
    try {
        await mongoose.connection.close();
        console.log('MongoDB connection closed due to app termination');
        process.exit(0);
    } catch (error) {
        console.error('Error closing MongoDB connection:', error);
        process.exit(1);
    }
});

// Closing the MongoDB connection on process termination
const closeDatabaseConnection = async (signal) => {
    try {
        await mongoose.connection.close();
        console.log(`MongoDB connection closed due to app ${signal}`);
        process.exit(0);
    } catch (error) {
        console.error('Error closing MongoDB connection:', error);
        process.exit(1);
    }
};

process.on('SIGINT', () => closeDatabaseConnection('SIGINT'));
process.on('SIGTERM', () => closeDatabaseConnection('SIGTERM'));

