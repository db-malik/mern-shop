import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Orders.deleteMany()
    await Products.deleteMany()
    await Users.deleteMany()

    const createUsers = await User.insertMany(users)

    const adminUser = createUsers[0]._id

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }
    })

    await Product.insertMany(sampleProducts)
    console.log('Data imported successfully'.green.underline)
    process.exit()
  } catch (error) {
    console.log(`Error ${error.message}`.red.underline)
    process.exit(1)
  }
}
