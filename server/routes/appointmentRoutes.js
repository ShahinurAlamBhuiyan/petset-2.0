const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// ==================== APPOINTMENTS ====================

// Get all appointments
router.get('/', async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get appointments by doctor ID
router.get('/doctor/:drId', async (req, res) => {
    try {
        const appointments = await Appointment.find({ dr_id: req.params.drId });
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get appointments by user ID
router.get('/user/:userId', async (req, res) => {
    try {
        const appointments = await Appointment.find({ patient_id: req.params.userId });
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Book appointment
router.post('/', async (req, res) => {
    try {
        const newAppointment = new Appointment(req.body);
        await newAppointment.save();
        res.status(201).json({ message: 'Appointment added successfully!', appointment: newAppointment });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete appointments by doctor ID
router.delete('/doctor/:drId', async (req, res) => {
    try {
        const result = await Appointment.deleteMany({ dr_id: req.params.drId });
        res.json({ message: `Deleted ${result.deletedCount} appointments for doctor ${req.params.drId}` });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete appointments by user ID
router.delete('/user/:userId', async (req, res) => {
    try {
        const result = await Appointment.deleteMany({ patient_id: req.params.userId });
        res.json({ message: `Deleted ${result.deletedCount} appointments for user ${req.params.userId}` });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete appointment by appointment ID
router.delete('/:appointmentId', async (req, res) => {
    try {
        const deleted = await Appointment.findOneAndDelete({ _id: req.params.appointmentId });
        if (!deleted) return res.status(404).json({ message: 'Appointment not found' });
        res.json({ message: 'Appointment deleted successfully!' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
