const router = require("express").Router();
const Department = require("../models/Department");
const Leave = require("../models/Leave");
const path = require("path");
const isAuth = require("../middlewares/isAuth");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const Attendance = require("../models/Attendance");
///////////////////////////

const fileUploadPaths = {
    FILE_UPLOAD_PATH: path.join(__dirname, "..", "client/public/uploads"),
};

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, fileUploadPaths.FILE_UPLOAD_PATH);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname.toLowerCase().replace(/ /g, "_"));
    },
});

const postFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

let uploadPost = multer({
    storage: storage,
    fileFilter: postFilter,
});

router.get("/getEmployee", async (req, res) => {
    try {
        const Employee = await User.find({});
        res.status(200).json({ message: "All Employee", data: Employee });
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

router.get("/getDepartment", async (req, res) => {
    try {
        const Departments = await Department.find({});
        res.status(200).json({
            message: "All Departments ",
            data: Departments,
        });
    } catch (err) {
        res.status(500).json({ message: err });
    }
});
router.post("/addDepartment", async (req, res) => {
    try {
        const new_Department = await Department.create({
            ...req.body,
        });
        res.status(201).json({
            message: "Department Created ... ",
            data: new_Department,
        });
    } catch (err) {
        res.status(500).json({ message: err });
    }
});
router.post("/addLeave", async (req, res) => {
    try {
        const { LeaveD, LeaveEnd, LeaveType, Reason, Employee } = req.body;
        const newLeave = await Leave.create({
            LeaveD,
            LeaveEnd,
            LeaveType,
            Reason,
            Employee,
        });
        res.status(201).json({ message: "leave created ", data: newLeave });
    } catch (err) {
        res.status(500).json({ message: err });
    }
});
router.get("/getLeave", async (req, res) => {
    try {
        const Leaves = await Leave.find({}).populate(
            "Employee",
            "Name lastName "
        );
        res.status(200).json({ message: "leave list", data: Leaves });
    } catch (err) {
        res.status(500).json({ message: err });
    }
});
router.put("/updateDecision/:id", async (req, res) => {
    try {
        const { id } = req.params;
        console.log(req.body);
        const updateDecision = await Leave.findByIdAndUpdate(id, {
            ...req.body,
        });
        res.status(200).json({
            message: "decision updated",
            data: updateDecision,
        });
    } catch (err) {
        res.status(500).json({ message: err });
    }
});
router.post("/addAttendance", async (req, res) => {
    try {
        const attendance = await Attendance.insertMany([...req.body]);
        res.status(201).json({ message: "attendance added", data: attendance });
    } catch (err) {
        res.status(500).json({ message: err });
    }
});
router.get("/allAttendance", async (req, res) => {
    try {
        const allAttendance = await Attendance.find({}).populate(
            "Employee",
            "Name lastName "
        );
        res.status(200).json({
            message: "all Attendance",
            data: allAttendance,
        });
    } catch (err) {
        res.status(500).json({ message: err });
    }
});
module.exports = router;
