const mongoose = require('mongoose');

const adoptionCommentSchema = new mongoose.Schema({
    adoption_id: { type: String, required: true },
    author_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    body: String,
}, { timestamps: true });

module.exports = mongoose.model('AdoptionComment', adoptionCommentSchema);
