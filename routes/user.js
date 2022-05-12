const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const isAuth = require("../middlewares/isAuth");
require("dotenv").config();

router.post("/register", async (req, res) => {
    try {
        console.log(req.body);
        const {
            DateOfBirth,
            Name,
            address,
            email,
            gender,
            department,
            lastName,
            password,
            phone,
        } = req.body;

        const findUser = await User.findOne({ email });
        if (findUser) {
            res.status(409).json({
                status: false,
                message: "Email already Exist",
            });
        } else {
            bcrypt.hash(password, 12, async (err, hash) => {
                if (err) {
                    res.status(500).json({ status: false, message: err });
                } else if (hash) {
                    const user = await User.create({
                        DateOfBirth,
                        Name,
                        address,
                        email,
                        department,
                        gender,
                        lastName,
                        phone,
                        password: hash,
                    });
                    res.status(201).json({
                        status: true,
                        message: "Employee created",
                        data: user,
                    });
                }
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});
router.post("/login", (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email })
        .then((user) => {
            if (user) {
                bcrypt.compare(
                    password,
                    user.password,
                    (err, passwordMatch) => {
                        if (err) throw err;
                        if (passwordMatch === true) {
                            jwt.sign(
                                { user },
                                process.env.SECRETKEY,
                                (err, token) => {
                                    if (err) throw err;
                                    res.json({
                                        status: true,
                                        msg: "logged in successfully",
                                        token: token,
                                    });
                                }
                            );
                        } else {
                            res.json({
                                status: false,
                                msg: "wrong password",
                            });
                        }
                    }
                );
            } else {
                res.json({
                    status: false,
                    msg: "email doesn't exist",
                });
            }
        })
        .catch((err) => console.log(err));
});

router.get("/current", isAuth, (req, res) => {
    if (req.user) {
        res.send({ status: true, msg: "authorized", user: req.user });
    } else {
        res.send({ status: false, msg: "unauthorised" });
    }
});

module.exports = router;
