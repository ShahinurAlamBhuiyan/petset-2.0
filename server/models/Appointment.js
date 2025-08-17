const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    patient_id: { type: String, required: true },
    dr_id: { type: String, required: true },
    service_id: String,
    service_name: String,
    appointment_date: Date,
    patient_name: String,
    patient_email: String,
    patient_contact: String,
    fees: Number
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);
