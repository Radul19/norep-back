import { connect,set } from 'mongoose'
// const { connect, set } = require('mongoose')
// import dotenv from 'dotenv'
// dotenv.config()
const connectDB = async () => {
  try {
    set("strictQuery", false);
    await connect(process.env.MONGODB_CONNECTION)
      .then(db => console.log('Database is connected'))
      .catch(err => console.log(err))

  } catch (error) {
    console.log(error)
  }

}

connectDB()