// models/Service.js
const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    dr_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'AnimalSpecialist', required: true }],
    service_name: String,
    service_details: String,
    service_img: String,
});

module.exports = mongoose.model('Service', serviceSchema);
