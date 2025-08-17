const mongoose = require('mongoose');

const animalSpecialistSchema = new mongoose.Schema({
    dr_name: { type: String, required: true },
    dr_email: { type: String, required: true },
    dr_contact: String,
    specialise: String,
    img_URL: String,
    experience_yr: Number,
    visiting_fees: Number,
    dr_address: String
}, { timestamps: true });

module.exports = mongoose.model('AnimalSpecialist', animalSpecialistSchema);
