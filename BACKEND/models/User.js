const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName: {
        type:String,
        maxlength: 50
    },

    lastName: {
        type:String,
        maxlength: 50
    },

    email: {
        type:String,
        trim:true,
        unique: 1 
    },

    password: {
        type: String,
        minglength: 5
    },

    gender:{
        type : String,
        required : true,
    },

    address:{
        type: String,
        required: true,
        trim: true,
    },

    phone: {
        type: String,
        required: true,
        maxlength: 13,
        trim: true,
    }
});

module.exports = User = mongoose.model("user", userSchema);