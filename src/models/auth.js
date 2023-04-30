import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        default: "member"
    }
    
},{timestamps:true, versionKey:false})

export default mongoose.model("User", authSchema)