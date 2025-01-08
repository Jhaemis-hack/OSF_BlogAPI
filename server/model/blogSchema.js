const mongoose = require('mongoose');

const BLogSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    headline: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    imageUrl: {
        type: String,
    },
    picTaker:{
        type: String,
    },
    story:{
        type: String,
        required: true
    },
    starred: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('BlogCategory', BLogSchema);