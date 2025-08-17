const express = require('express');
const router = express.Router();
const AdoptionPost = require('../models/AdoptionPost');
const AdoptionComment = require('../models/AdoptionComment');

// ==================== ADOPTION POSTS ====================

// Get all adoption posts
router.get('/', async (req, res) => {
    try {
        const posts = await AdoptionPost.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get adoption posts by user ID
router.get('/user/:userId', async (req, res) => {
    try {
        const posts = await AdoptionPost.find({ owner_id: req.params.userId });
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get adoption post by ID
router.get('/:postId', async (req, res) => {
    try {
        const post = await AdoptionPost.findOne({ _id: req.params.postId }).populate('owner_id', 'full_name email');
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add new adoption post
router.post('/', async (req, res) => {
    try {
        const newPost = new AdoptionPost(req.body);
        await newPost.save();
        res.status(201).json({ message: 'Adoption post added successfully!', post: newPost });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update adoption post by ID
router.put('/:postId', async (req, res) => {
    try {
        const updated = await AdoptionPost.findOneAndUpdate(
            { _id: req.params.postId },
            { title: req.body.title, details: req.body.details },
            { new: true }
        );
        if (!updated) return res.status(404).json({ message: 'Post not found' });
        res.json({ message: 'Adoption post updated successfully!', updated });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete adoption post by ID
router.delete('/:postId', async (req, res) => {
    try {
        const deleted = await AdoptionPost.findOneAndDelete({ _id: req.params.postId });
        if (!deleted) return res.status(404).json({ message: 'Post not found' });
        res.json({ message: 'Adoption post deleted successfully!' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete all adoption posts for a user
router.delete('/user/:userId', async (req, res) => {
    try {
        const result = await AdoptionPost.deleteMany({ owner_id: req.params.userId });
        res.json({ message: 'All adoption posts for user deleted successfully!', deletedCount: result.deletedCount });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// ==================== ADOPTION COMMENTS ====================

// Add a comment
router.post('/comments', async (req, res) => {
    try {
        const newComment = new AdoptionComment(req.body);
        await newComment.save();
        res.status(201).json({ message: 'Adoption comment added successfully!', comment: newComment });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get comments for a specific adoption post
router.get('/comments/post/:postId', async (req, res) => {
    try {
        const comments = await AdoptionComment.find({ adoption_id: req.params.postId }).populate('author_id', 'full_name email image_URL');
        res.json(comments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete all comments by a user
router.delete('/comments/user/:userId', async (req, res) => {
    try {
        const result = await AdoptionComment.deleteMany({ author_id: req.params.userId });
        res.json({ message: 'Adoption comments deleted successfully!', deletedCount: result.deletedCount });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
