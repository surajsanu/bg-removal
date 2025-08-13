import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    clerkId: {
        type: String, 
        required: true, 
        unique: true },
    email: { 
        type: String, 
        required: true, 
        unique: true },
    photo: { 
        type: String, },
    firstName: { 
        type: String },
    lastName: { 
        type: String },
    creditBalance: { 
        type: Number, 
        default: 5 },
},{timestamps: true})

const userModel = mongoose.models.users || mongoose.model("User", userSchema)

export default userModel;