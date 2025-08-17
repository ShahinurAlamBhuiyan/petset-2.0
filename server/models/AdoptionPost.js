const mongoose = require('mongoose');

const adoptionPostSchema = new mongoose.Schema({
    owner_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: String,
    details: String,
    img_URL: String,
    img_URL2: String,
    img_URL3: String,
}, { timestamps: true });

module.exports = mongoose.model('AdoptionPost', adoptionPostSchema);
