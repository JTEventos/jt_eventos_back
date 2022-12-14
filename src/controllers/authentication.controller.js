const { response } = require("../app");
const { sign } = require("jsonwebtoken");
const { compareSync } = require("bcrypt")
const { validationResult } = require("express-validator");
const { invalidAuth } = require("./utils/return-message");
const User = require("../models/user.model");

exports.login = async (req, resp, next) => {
    try {
        validationResult(req).throw()
        const { username, password } = req.body;
        
        User.findOne({ username: username }, async (e, login) => {
            if (login && compareSync(password, login.password)) {
                const token = await sign({ username: username }, process.env.SECRET, { expiresIn: process.env.TIMEOUT || 300 });
                global.role = login.role;
                resp.status(201).json({ id: login._id, username: login.username, role: login.role, token: token });
            } else {
                resp.status(401).json(invalidAuth());
            }
        });
    } catch(e) {
        next(e);
    }
}