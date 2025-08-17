const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_type: { type: String, required: true },
    product_name: { type: String, required: true },
    product_price: Number,
    product_description: String,
    product_image: String
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
