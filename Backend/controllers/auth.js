require("dotenv").config();
var jwt = require("jsonwebtoken");
var expressJwt = require("express-jwt");
const { v4: uuidv4 } = require('uuid');

exports.adminAuth = (req, res) => {
    const PASSCODE = req.body.passcode;
    if (PASSCODE == '8072002769' || PASSCODE == '9597621113') {
        const token = jwt.sign({ _id: uuidv4() }, process.env.SECRET);
        res.cookie("ADMIN", token, { expire: new Date() + 99999 });
        return res.json({
            user: uuidv4()
        })
    }
}