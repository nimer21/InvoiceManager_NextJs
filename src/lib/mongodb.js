import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try {
        //await mongoose.connect(process.env.MONGODB_URI);
        await mongoose.connect("mongodb+srv://nimerelsayed:Lkyaj6Qy6b0nzTHX@cluster0.5olw4.mongodb.net/InvoiceManager?retryWrites=true&w=majority&appName=Cluster0");
        return true
    } catch (error) {
        console.log("Connection Error",error);
        process.exit(1)
    }
}