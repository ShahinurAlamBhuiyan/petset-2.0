const mongoose = require('mongoose');

const hostelOrderSchema = new mongoose.Schema({
    customer_id: { type: String, required: true },
    payment_id: String,
    orderer_name: String,
    orderer_email: String,
    orderer_contact: String,
    shipping_address: String,
    orderData: {
        petType: String,
        guests: Number,
        checkIn: Date,
        checkOut: Date,
        totalPrice: Number
    },
    status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Cancelled', 'Completed'],
        default: 'Pending'
    }
}, { timestamps: true });

module.exports = mongoose.model('HostelOrder', hostelOrderSchema);
