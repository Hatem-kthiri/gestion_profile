const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        requried: true,
    },
    role: {
        type: String,
        default: "admin",
    },
});

module.exports = Admin = mongoose.model("admin", AdminSchema);
