const mongoose = require('mongoose');
const { Schema } = mongoose;


//schema or configration
const productSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    brand: String,
    category: String,
    thumbnail: String,
    images: [String]
});


//model for schema we perform c u r d operation on model
exports.product = mongoose.model('product', productSchema);

