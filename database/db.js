const mongoose = require('mongoose');
console.log(process.env.MONGODB_URI);

const DB = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');
        
    } catch (error) {
        console.log('Error connecting to MongoDB');  
    }
}

module.exports = DB;