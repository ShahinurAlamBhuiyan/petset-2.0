const express = require('express');
const router = express.Router();
const User = require('../models/User');

// ------------------- GET ALL USERS WITH ROLE 'USER' -------------------
router.get('/', async (req, res) => {
    try {
        const users = await User.find({ role: 'user' }).select('-password'); // Exclude passwords
        res.json({ users });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ------------------- DELETE USER BY ID -------------------
router.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ error: 'User not found' });

        console.log(`User ${req.params.id} deleted`);
        res.json({ message: 'User deleted successfully!', user: deletedUser });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ------------------- UPDATE USER BY ID -------------------
router.put('/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                full_name: req.body.full_name,
                email: req.body.email,
                image_URL: req.body.image_URL
            },
            { new: true } // return the updated document
        ).select('-password'); // Exclude password

        if (!updatedUser) return res.status(404).json({ error: 'User not found' });

        console.log(`User ${req.params.id} updated`);
        res.json({ message: 'User updated successfully!', user: updatedUser });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
