const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    product_id: { type: String, required: true },
    customer_id: { type: String, required: true },
    payment_id: String,
    orderer_name: String,
    orderer_email: String,
    orderer_contact: String,
    order_date: { type: Date, default: Date.now },
    shipping_address: String,
    status: { type: String, default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
