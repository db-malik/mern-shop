import mongoose from 'mongoose'

import Color from 'colors'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {})
    console.log(`MongoDB Connected to  ${conn.connection.host}`.green.underline)
  } catch (error) {
    console.log(`ERROR: ${error.message}`.red.underline)
    process.exit(1)
  }
}

export default connectDB
