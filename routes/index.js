const { Router } = require('express')

const router = new Router()

const ProductController = require('../controllers/ProductController')

router.get('/api/products/getProducts', ProductController.getProducts)
router.get('/api/products/getProductById/:id', ProductController.getProductById)

module.exports = router