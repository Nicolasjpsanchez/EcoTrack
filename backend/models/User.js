import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true, // Trim whitespace from input
        minlength: 3, // Minimum length validation
        maxlength: 30, // Maximum length validation
        match: /^[a-zA-Z0-9_]*$/, // Regular expression pattern validation
        lowercase: true // Convert username to lowercase
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: /^\S+@\S+\.\S+$/ // Email format validation using regex
    },
    password: {
        type: String,
        required: true,
        minlength: 6, // Minimum password length validation
        maxlength: 100 // Maximum password length validation
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Custom validation for email uniqueness
userSchema.path('email').validate(async function(value) {
    const emailCount = await mongoose.models.User.countDocuments({ email: value });
    return !emailCount;
}, 'Email already exists');

// Indexes
userSchema.index({ username: 1 }); // Index on username for faster queries
userSchema.index({ email: 1 }, { unique: true }); // Unique index on email for uniqueness constraint

const User = mongoose.model('User', userSchema);

export default User;
