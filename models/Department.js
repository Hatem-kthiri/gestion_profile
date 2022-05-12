const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DepartmentSchema = new Schema({
    Name: {
        type: String,
        required: true,
    },
});

module.exports = Department = mongoose.model("department", DepartmentSchema);
