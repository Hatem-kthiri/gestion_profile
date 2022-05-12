const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LeaveSchema = new Schema({
    Employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    LeaveD: {
        type: Date,
    },
    LeaveEnd: {
        type: Date,
    },
    LeaveType: {
        type: String,
    },
    Reason: {
        type: String,
    },
    Decision: {
        type: String,
        default: "Pending",
    },
});

module.exports = Leave = mongoose.model("Leave", LeaveSchema);
