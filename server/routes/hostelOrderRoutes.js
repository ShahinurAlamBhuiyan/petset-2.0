const express = require('express');
const router = express.Router();
const HostelOrder = require('../models/HostelOrder');

// ------------------- ADD HOSTEL ORDER -------------------
router.post('/', async (req, res) => {
    try {
        const newOrder = new HostelOrder(req.body);
        await newOrder.save();
        res.status(201).json({ message: 'Hostel order added successfully!', order: newOrder });
    } catch (err) {
        console.error('Error adding hostel order:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ------------------- GET ORDERS BY CUSTOMER ID -------------------
router.get('/customer/:id', async (req, res) => {
    try {
        const orders = await HostelOrder.find({ customer_id: req.params.id });
        res.json({ orders });
    } catch (err) {
        console.error('Error fetching customer orders:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ------------------- GET ALL ORDERS (ADMIN) -------------------
router.get('/', async (req, res) => {
    try {
        const orders = await HostelOrder.find();
        res.json({ orders });
    } catch (err) {
        console.error('Error fetching all orders:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ------------------- DELETE ORDER BY ORDER ID -------------------
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await HostelOrder.findOneAndDelete({ _id: req.params.id });
        if (!deleted) return res.status(404).json({ error: 'Order not found' });
        res.json({ message: 'Order deleted successfully!' });
    } catch (err) {
        console.error('Error deleting order:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ------------------- UPDATE ORDER STATUS -------------------
router.put('/:orderId', async (req, res) => {
    try {
        const { status } = req.body;

        if (!status) {
            return res.status(400).json({ error: 'Status is required' });
        }

        const updatedOrder = await HostelOrder.findByIdAndUpdate(
            req.params.orderId,
            { status: status },
            { new: true }
        );

        if (!updatedOrder) {
            return res.status(404).json({ error: 'Order not found' });
        }

        res.json({ message: 'Order status updated successfully!', order: updatedOrder });
    } catch (error) {
        console.error('Error updating order status:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
