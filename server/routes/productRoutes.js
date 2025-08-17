const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// ------------------- GET ALL PRODUCTS -------------------
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json({ products });
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ------------------- GET PRODUCTS BY TYPE -------------------
router.get('/by-type', async (req, res) => {
    try {
        const productType = req.query.product_type;
        if (!productType) return res.status(400).json({ error: 'product_type query is required' });

        const products = await Product.find({ product_type: productType });
        res.json({ products });
    } catch (err) {
        console.error('Error fetching products by type:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ------------------- SEARCH PRODUCTS -------------------
router.get('/search', async (req, res) => {
    try {
        const query = req.query.query;
        if (!query) return res.status(400).json({ error: 'query parameter is required' });

        const products = await Product.find({
            $or: [
                { product_name: { $regex: query, $options: 'i' } },
                { product_description: { $regex: query, $options: 'i' } }
            ]
        });
        res.json({ products });
    } catch (err) {
        console.error('Error searching products:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ------------------- GET PRODUCT BY ID -------------------
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findOne({ _id: req.params.id });
        if (!product) return res.status(404).json({ error: 'Product not found' });
        res.json({ product });
    } catch (err) {
        console.error('Error fetching product:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});


// ------------------- ADD PRODUCT -------------------
router.post('/', async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        console.log('Product added');
        res.status(201).json({ message: 'Product added successfully!', product: newProduct });
    } catch (err) {
        console.error('Error adding product:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ------------------- UPDATE PRODUCT BY ID -------------------
router.put('/:id', async (req, res) => {
    try {
        const updatedProduct = await Product.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }
        );
        if (!updatedProduct) return res.status(404).json({ error: 'Product not found' });
        res.json({ message: 'Product updated successfully!', product: updatedProduct });
    } catch (err) {
        console.error('Error updating product:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ------------------- DELETE PRODUCT BY ID -------------------
router.delete('/:id', async (req, res) => {
    try {
        const deletedProduct = await Product.findOneAndDelete({ _id: req.params.id });
        if (!deletedProduct) return res.status(404).json({ error: 'Product not found' });
        console.log('Product deleted.');
        res.json({ message: 'Product deleted successfully!', product: deletedProduct });
    } catch (err) {
        console.error('Error deleting product:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
