const mongoose = require('mongoose');

const CarbonFootprintSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    carbonValue: {
        type: Number,
        required: true
    },
    // Additional fields
    location: {
        type: String,
        required: true
    },
    activityType: {
        type: String,
        enum: ['transport', 'electricity', 'food', 'waste'],
        required: true
    }
    // Add other fields as needed
});

// Indexes
CarbonFootprintSchema.index({ userId: 1, date: -1 }); // Compound index for efficient querying

// Methods
CarbonFootprintSchema.statics.findByUserId = function(userId) {
    return this.find({ userId }).sort({ date: -1 });
};

// Virtuals
CarbonFootprintSchema.virtual('formattedDate').get(function() {
    return this.date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
});

const CarbonFootprint = mongoose.model('CarbonFootprint', CarbonFootprintSchema);

module.exports = CarbonFootprint;
