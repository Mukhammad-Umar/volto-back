const Product = require('../models/ProductModel')

const getProducts = async (req, res) => {
  let products = await Product.find()
  res.send(products)
}

const getProductById = async (req, res) => {
  if (req.params.id) {
    let products = await Product.findById(req.params.id)
    res.send(products)
  }
}

// const product = await Product.create(req.body)
// res.send(product) <- to create new product

module.exports = { 
  getProducts,
  getProductById
}