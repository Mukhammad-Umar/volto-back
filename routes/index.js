const { Router } = require('express')

const router = new Router()

const ProductController = require('../controllers/ProductController')

router.get('/api/products/getProducts', ProductController.getProducts)

module.exports = router