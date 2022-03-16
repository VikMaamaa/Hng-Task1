const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        unique: true,
        required: true,
    },
    age:{
        type: Number,
    },
    message:{
        type: String,
    },
    password:{
        type: String
    },
    createDate:{
        type: Date
    }
}, {timestamps: true})

module.exports = mongoose.model("User", userSchema)