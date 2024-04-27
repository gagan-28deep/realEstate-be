import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_DB_URL}/${DB_NAME}`)
        console.log("DB connected");
    } catch (error) {
        console.log("Error connecting to DB");
        process.exit(1)
    }
};

export {connectDb}