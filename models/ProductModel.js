const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
  id: String,
  price: String,
  image: String,
  productName: String,
  description: String
});

module.exports = mongoose.model('voltoproduct', productSchema)