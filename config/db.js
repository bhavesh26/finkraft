// mongoose.connect("mongodb://localhost:27017/magesDB");
const mongoose = require('mongoose')


const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/local');
    console.log("✅ MongoDB Connected Successfully 🚀");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1); // Exit the process if connection fails
  }
};
module.exports = {connectDB}