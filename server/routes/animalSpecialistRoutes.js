const express = require('express');
const router = express.Router();
const AnimalSpecialist = require('../models/AnimalSpecialist');

// ==================== ANIMAL SPECIALISTS ====================

// Get all doctors
router.get('/', async (req, res) => {
    try {
        const doctors = await AnimalSpecialist.find();
        res.json(doctors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new doctor
router.post('/', async (req, res) => {
    try {
        const newDoctor = new AnimalSpecialist(req.body);
        await newDoctor.save();
        res.status(201).json({ message: 'Doctor added successfully!', doctor: newDoctor });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get doctor by dr_id
router.get('/:drId', async (req, res) => {
    try {
        const doctor = await AnimalSpecialist.findOne({ _id: req.params.drId });
        if (!doctor) return res.status(404).json({ message: 'Doctor not found' });
        res.json(doctor);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update doctor by dr_id
router.put('/:drId', async (req, res) => {
    try {
        const updatedDoctor = await AnimalSpecialist.findOneAndUpdate(
            { _id: req.params.drId },
            { $set: req.body },
            { new: true }
        );
        if (!updatedDoctor) return res.status(404).json({ message: 'Doctor not found' });
        res.json({ message: 'Doctor updated successfully!', updatedDoctor });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete doctor by dr_id
router.delete('/:drId', async (req, res) => {
    try {
        const deletedDoctor = await AnimalSpecialist.findOneAndDelete({ _id: req.params.drId });
        if (!deletedDoctor) return res.status(404).json({ message: 'Doctor not found' });
        res.json({ message: 'Doctor deleted successfully!' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
