const mongoose = require("mongoose");

const connectDB = async () => {
    try{
       await mongoose.connect(process.env.MONGO_URL);
       console.log('Connected to MongoDB');
    } catch (error) {
        console.log("NOT CONNECTED TO NETWORK", error);
    }
}
module.exports = connectDB;