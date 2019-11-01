const mongoose = require("mongoose")
const { Schema, model } = mongoose

const userSchema = new Schema({
    __v: {
        type: Number,
        select: false
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    age: {
        type: Number,
        required: false,
        default: 18
    }
})

 module.exports = model('User', userSchema)
