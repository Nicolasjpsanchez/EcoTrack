import mongoose from 'mongoose';

const connectDB = async () => {
    const dbURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
    console.log('Attempting to connect to MongoDB...');

    const options = {
        useNewUrlParser: true, // Not necessary for driver version 4.0 and above
        useUnifiedTopology: true // Not necessary for driver version 4.0 and above
    };

    try {
        await mongoose.connect(dbURI, options);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        // Consider a more graceful approach to shutting down, or a retry mechanism
        process.exit(1);
    }
};
