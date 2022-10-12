import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

// @desc Fetch all products
// @route Get  /api/products
// @access public
const authUser = asyncHandler(async (req, res) => {})

export { authUser }
