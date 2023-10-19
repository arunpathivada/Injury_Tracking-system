import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    userame:{
        type:String,
        required:true,
        unique:true
    },
    eamil:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
},{timestamps:true})
const User= mongoose.model("User",patientSchema)
export default User;