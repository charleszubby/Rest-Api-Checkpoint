import mongoose from "mongoose";

//! creating a function that connect to our database
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log(`mongodb connected: ${connection.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

//! named export
//! export { connectDB };

// default export
export default connectDB;
