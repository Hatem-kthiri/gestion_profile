const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    Name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    creationDate: {
        type: Date,
        default: Date.now(),
    },
    lastName: { type: String, required: true },
    DateOfBirth: { type: String, required: true },
    gender: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    department: { type: String, required: true },
    role: { type: String, default: "Employee" },
    // profileImg: {
    //     type: String,
    //     default:
    //         "https://cahsi.utep.edu/wp-content/uploads/kisspng-computer-icons-user-clip-art-user-5abf13db5624e4.1771742215224718993529.png",
    // },
});

module.exports = User = mongoose.model("user", UserSchema);
