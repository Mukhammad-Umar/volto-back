const { Router } = require('express')

const router = new Router()

// var express = require('express')
// var cors = require('cors')

// var app = express()
// app.use(cors())

const ProductController = require('../controllers/ProductController')

router.get('/api/products/getProducts', ProductController.getProducts)

module.exports = router