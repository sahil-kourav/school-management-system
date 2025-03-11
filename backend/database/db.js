const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ Connected to MongoDB");
    } catch (error) {
        console.error("❌ NOT CONNECTED TO NETWORK ❌");
        console.error("Error Details:", error.message);
        process.exit(1); // Force exit in case of failure
    }
};

module.exports = connectDB;
