const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        trim: true,
        unique: true,
        match: [/.+@.+\..+/, "Enter a valid email"],
        required: "Must pass an email",
    },

    password: {
        type: String,
        trim: true,
        required: "Must pass a password",
    },

    date: {
        type: Date,
        default: Date.now,
    },
    

});

const User = mongoose.model("User", userSchema);

module.exports = User;