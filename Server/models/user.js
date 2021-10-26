const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchame = Schema({
    name: String,
    lastname: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    repeatPassword: String,
    role: String,
    active: String
});

module.exports = mongoose.model("User", UserSchame);
