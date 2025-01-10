import mongoose from "mongoose";
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/githubApp");
        console.log("Database connected");
    } catch (error) {
        console.error("Database connection failed", error);
        process.exit(1);
    }
};
export default connectDB;
