const express = require("express");
const log = express.Router();
const bcrypt = require("bcrypt");
const User = require("../model/user.model");
const jwt = require("jsonwebtoken");


log.post("", async (req, res) => {
    try {
        const u = req.body;
        veru = await User.find({ email: u.email });
        if (veru.length == 0) {
            res.send({
                reponse: false,
                message: "ne existe pas"
            });
        } else if (veru.length != 0) {
            valid = bcrypt.compareSync(u.pass, veru[0].pass);
            if (!valid) {
                res.send({
                    reponse: false,
                    message: "pass invalid"
                })
            } else {
                const pay = {
                    _id: veru[0]._id,
                    name: veru[0].name,
                    email: veru[0].email,
                    role: veru[0].role
                };
                const Token = jwt.sign(pay, "secret");
                res.send({ token: Token, role: u.role, reponse: true, user: veru[0] });
            }
        }
    } catch {
        (err) => {
            res.send({
                reponse: false,
                message: err
            })
        }
    };
});

module.exports = log;