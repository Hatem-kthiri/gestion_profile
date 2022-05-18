const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AttendanceSchema = new Schema({
    Employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    situation: {
        type: String,
        requried: true,
    },
    date: {
        type: String,
    },
});

module.exports = Attendance = mongoose.model("attendance", AttendanceSchema);
