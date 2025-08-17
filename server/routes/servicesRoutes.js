const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// ------------------- GET ALL SERVICES -------------------
router.get('/', async (req, res) => {
    try {
        const services = await Service.find()
        res.json({ services });
    } catch (err) {
        console.error('Error fetching services:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ------------------- GET SINGLE SERVICE BY ID -------------------
router.get('/:id', async (req, res) => {
    try {
        const service = await Service.findOne({ _id: req.params.id });
        if (!service) return res.status(404).json({ error: 'Service not found' });
        res.json({ service });
    } catch (err) {
        console.error('Error fetching service:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ------------------- GET SERVICE WITH Assigned DOCTORS INFO -------------------
router.get('/with-doctor/:id', async (req, res) => {
    try {
        const service = await Service.findById({ _id: req.params.id }).populate('dr_ids');
        if (!service) return res.status(404).json({ error: 'Service not found' });
        res.json({ service });
    } catch (err) {
        console.error('Error fetching service with doctor:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ------------------- GET SERVICES BY DOCTOR ID -------------------
router.get('/doctor/:id', async (req, res) => {
    try {
        const services = await Service.find({ dr_ids: req.params.id });
        res.json({ services });
    } catch (err) {
        console.error('Error fetching services by doctor:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ------------------- ADD NEW SERVICE -------------------
router.post('/', async (req, res) => {
    try {
        const newService = new Service(req.body);
        await newService.save();
        res.status(201).json({ message: 'Service added successfully!', service: newService });
    } catch (err) {
        console.error('Error adding service:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ------------------- UPDATE SERVICE (with optional doctor add) -------------------
router.put('/:service_id', async (req, res) => {
    try {
        const { service_name, service_details, newDoctorId } = req.body;

        // Prepare update object
        const updateData = {};
        if (service_name) updateData.service_name = service_name;
        if (service_details) updateData.service_details = service_details;

        // If doctor id provided, push to dr_ids array
        if (newDoctorId) {
            updateData.$addToSet = { dr_ids: newDoctorId }; // prevents duplicates
        }

        const updatedService = await Service.findOneAndUpdate(
            { _id: req.params.service_id },
            updateData,
            { new: true }
        );

        if (!updatedService) {
            return res.status(404).json({ error: 'Service not found' });
        }

        res.json({
            message: 'Service updated successfully!',
            service: updatedService
        });

    } catch (err) {
        console.error('Error updating service:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});


// ------------------- DELETE SERVICE BY ID -------------------
router.delete('/:id', async (req, res) => {
    try {
        const deletedService = await Service.findOneAndDelete({ _id: req.params.id });
        if (!deletedService) return res.status(404).json({ error: 'Service not found' });
        res.json({ message: 'Service deleted successfully!', service: deletedService });
    } catch (err) {
        console.error('Error deleting service:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});


// ------------------- REMOVE DOCTOR FROM SERVICE -------------------
router.delete('/doctor/:service_id/:dr_id', async (req, res) => {
    try {
        const updatedService = await Service.findByIdAndUpdate(
            req.params.service_id,
            { $pull: { dr_ids: req.params.dr_id } }, // remove doctor from array
            { new: true } // return updated document
        );

        if (!updatedService) {
            return res.status(404).json({ error: 'Service not found' });
        }

        res.json({
            message: 'Doctor removed from service successfully!',
            service: updatedService
        });
    } catch (err) {
        console.error('Error removing doctor from service:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});


// ------------------- DELETE ALL SERVICES BY DOCTOR -------------------
router.delete('/doctor/:id', async (req, res) => {
    try {
        const deletedCount = await Service.deleteMany({ dr_id: req.params.id });
        res.json({ message: `${deletedCount.deletedCount || 0} services deleted successfully!` });
    } catch (err) {
        console.error('Error deleting services by doctor:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
