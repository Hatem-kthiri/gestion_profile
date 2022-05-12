const router = require("express").Router();
const Department = require("../models/Department");
const path = require("path");
const isAuth = require("../middlewares/isAuth");
const multer = require("multer");
const jwt = require("jsonwebtoken");

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

module.exports = router;
