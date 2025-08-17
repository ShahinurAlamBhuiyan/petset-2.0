const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const router = express.Router();

// ------------------- SIGN UP -------------------
router.post('/sign-up', async (req, res) => {
    try {
        const { email, full_name, image_URL, role, password } = req.body;
        console.log(email);

        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email is already in use' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user (no _id specified → MongoDB will auto-generate)
        const newUser = new User({
            email,
            full_name,
            image_URL,
            role,
            password: hashedPassword
        });

        await newUser.save();
        console.log('User data stored successfully');

        // Return only safe fields
        res.status(201).json({
            message: 'User registered successfully!',
            user: {
                id: newUser._id,
                email: newUser.email,
                full_name: newUser.full_name,
                image_URL: newUser.image_URL,
                role: newUser.role
            }
        });
    } catch (error) {
        console.error('Error storing user data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


// ------------------- SIGN IN -------------------
router.post('/sign-in', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Compare passwords
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        console.log('User authenticated successfully');

        // Return only safe fields
        res.json({
            message: 'Sign-in successful',
            user: {
                id: user._id,
                email: user.email,
                full_name: user.full_name,
                image_URL: user.image_URL,
                role: user.role
            }
        });
    } catch (error) {
        console.error('Error during sign-in:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
