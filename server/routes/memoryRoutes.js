const express = require('express');
const router = express.Router();
const Memory = require('../models/Memory');

// ------------------- GET ALL MEMORIES -------------------
router.get('/', async (req, res) => {
    try {
        const memories = await Memory.find();
        res.json({ memories });
    } catch (err) {
        console.error('Error fetching memories:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ------------------- GET MEMORY BY id -------------------
router.get('/:id', async (req, res) => {
    try {
        const memory = await Memory.findOne({ _id: req.params.id })
            .populate('author_id', 'full_name email');
        // populate author_id with full_name and email from User

        if (!memory) return res.status(404).json({ error: 'Memory not found' });

        res.json({ memory });
    } catch (err) {
        console.error('Error fetching memory:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});


// ------------------- GET MEMORIES BY USER u_id -------------------
router.get('/user/:id', async (req, res) => {
    try {
        const memories = await Memory.find({ author_id: req.params.id });
        res.json({ memories });
    } catch (err) {
        console.error('Error fetching user memories:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ------------------- ADD MEMORY -------------------
router.post('/', async (req, res) => {
    try {
        const newMemory = new Memory(req.body);
        await newMemory.save();
        res.status(201).json({ message: 'Memory added successfully!', memory: newMemory });
    } catch (err) {
        console.error('Error adding memory:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ------------------- UPDATE MEMORY BY id -------------------
router.put('/:id', async (req, res) => {
    try {
        const updatedMemory = await Memory.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }
        );
        if (!updatedMemory) return res.status(404).json({ error: 'Memory not found' });
        res.json({ message: 'Memory updated successfully!', memory: updatedMemory });
    } catch (err) {
        console.error('Error updating memory:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ------------------- DELETE MEMORY BY ID -------------------
router.delete('/:id', async (req, res) => {
    try {
        const deletedMemory = await Memory.findOneAndDelete({ _id: req.params.id });
        if (!deletedMemory) return res.status(404).json({ error: 'Memory not found' });
        res.json({ message: 'Memory deleted successfully!' });
    } catch (err) {
        console.error('Error deleting memory:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ------------------- DELETE MEMORIES BY USER u_id -------------------
router.delete('/user/:id', async (req, res) => {
    try {
        const result = await Memory.deleteMany({ author_id: req.params.id });
        res.json({ message: 'Memories deleted successfully!', deletedCount: result.deletedCount });
    } catch (err) {
        console.error('Error deleting user memories:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
