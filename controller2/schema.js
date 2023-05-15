const mongoose=require('mongoose')

const {Schema}=mongoose

//schema or configration
const p_Schema = new Schema({
    id:Number,
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
exports.p_Schema = mongoose.model('product', p_Schema);


