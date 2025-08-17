const mongoose = require('mongoose');

const memorySchema = new mongoose.Schema({
    author_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    details: { type: String, required: true },
    img_URL: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Memory', memorySchema);
