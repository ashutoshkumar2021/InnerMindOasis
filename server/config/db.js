const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://ashutoshkumarstudent1:Test123@cluster0.dxcc7dx.mongodb.net"
    );
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Unable to connect to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDb;