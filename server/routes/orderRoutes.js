const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// ------------------- GET ALL ORDERS -------------------
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find();
        res.json({ orders });
    } catch (err) {
        console.error('Error fetching orders:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ------------------- GET ORDERS BY CUSTOMER ID -------------------
router.get('/customer/:id', async (req, res) => {
    try {
        const orders = await Order.find({ customer_id: req.params.id });
        res.json({ orders });
    } catch (err) {
        console.error('Error fetching customer orders:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ------------------- ADD ORDER -------------------
router.post('/', async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        await newOrder.save();
        res.status(201).json({ message: 'Order added successfully!', order: newOrder });
    } catch (err) {
        console.error('Error adding order:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ------------------- UPDATE ORDER STATUS -------------------
router.put('/:id', async (req, res) => {
    try {
        const updatedOrder = await Order.findOneAndUpdate(
            { _id: req.params.id },
            { $set: { status: req.body.status } },
            { new: true }
        );
        if (!updatedOrder) return res.status(404).json({ error: 'Order not found' });
        res.json({ message: 'Status updated successfully!', order: updatedOrder });
    } catch (err) {
        console.error('Error updating order status:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ------------------- DELETE ORDER BY ORDER ID -------------------
router.delete('/:id', async (req, res) => {
    try {
        const deletedOrder = await Order.findOneAndDelete({ _id: req.params.id });
        if (!deletedOrder) return res.status(404).json({ error: 'Order not found' });
        res.json({ message: 'Order deleted successfully!', order: deletedOrder });
    } catch (err) {
        console.error('Error deleting order:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ------------------- DELETE ORDERS BY CUSTOMER ID -------------------
router.delete('/customer/:id', async (req, res) => {
    try {
        const result = await Order.deleteMany({ customer_id: req.params.id });
        res.json({ message: 'Orders deleted successfully!', deletedCount: result.deletedCount });
    } catch (err) {
        console.error('Error deleting customer orders:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
