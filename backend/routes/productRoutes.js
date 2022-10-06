import express from 'express'
const router = express.Router()

import Product from '../models/productModel.js'

// Get all products
router.get('/', async (req, res) => {
  const products = await Product.find({})

  res.json(products)
})

// get product by id
router.get('/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

export default router
