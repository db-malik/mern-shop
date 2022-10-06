import express from 'express'
const router = express.Router()

// Get all products
router.get('/', (req, res) => {
  res.json(products)
})

// get product by id
router.get('/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

export default router
