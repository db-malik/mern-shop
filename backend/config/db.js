import mongoose from 'mongoose'
import mongoDB from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {})
    console.log(`MongoDB Connected to  ${conn.connection.host}`)
  } catch (error) {
    console.log(`ERROR: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB
