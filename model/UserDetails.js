import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }, phone: {
        type: Number,
        required: true
    }, message: {
        type: String,
        required: true
    }
})

const userModel = mongoose.model("Users", UserSchema)

export default userModel;