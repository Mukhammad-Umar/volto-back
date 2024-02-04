const Product = require('../models/ProductModel')

const getProducts = async (req, res) => {
  let products;
  if(req.params.id) {
    products = await Product.findById(req.params.id)
  } else {
    products = await Product.find()
  }
  res.send(products)
}

// const product = await Product.create(req.body)
// res.send(product) <- to create new product

module.exports = { 
  getProducts
}