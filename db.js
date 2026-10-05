// Import the mongoose library
const mongoose = require('mongoose');

// Define your database connection URL 
// (This connects to a local MongoDB instance or a cloud database like MongoDB Atlas)
const DB_URI = 'mongodb://localhost:27017/my_database';

// Function to connect to the database
const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connected successfully! 🎉');
    } catch (error) {
        console.error('Database connection failed: ❌', error.message);
        process.exit(1);
    }
};

// Export the connection function so other files can use it
module.exports = connectDB;