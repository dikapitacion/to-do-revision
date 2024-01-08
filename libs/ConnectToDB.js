import mongoose from "mongoose";

export default async function ConnectToDB(){
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Mongo DB connected")

    } catch (error) {
        console.log(error)
    }
}