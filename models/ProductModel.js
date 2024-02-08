const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
  id: String,
  price: String,
  image: String,
  productName: String,
  carouselImg: String,
  description_ru: String,
  description_uz: String,
  characteristic_ru: String,
  characteristic_uz: String
});

module.exports = mongoose.model('voltoproduct', productSchema)