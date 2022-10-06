import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'

// data
import users from './data/users.js'
import products from './data/products.js'

//models
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'

// conection datbase
import connectDB from './config/db.js'

dotenv.config()
connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

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

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data destroyed successfully'.green.underline)
    process.exit()
  } catch (error) {
    console.log(`Error ${error.message}`.red.underline)
    process.exit(1)
  }
}

if (process.argv[2] == '-d') {
  destroyData()
} else {
  importData()
}
