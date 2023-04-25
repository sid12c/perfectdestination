const jwt = require("jsonwebtoken");
const express = require("express");
const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const userRouter = express.Router();
// const auth = require("../../middleware/auth");
// const User = require('../../models/User');

// function auth (req, res, next) {
const auth = async (req, res, next) => {
    try {
        const token = req.header("x-auth-token");
        if (!token) {
            return res
            .status(401)
            .json({msg: "No auth token, access denied"});
        }
        const verified = jwt.verify(token, "passwordKey");
        if (!verified) {
            return res
            .status(401)
            .json({msg: "Token verification failed, authroization denied"});
        }
        // since the token was made out of document id 
        req.user = verified.id;
        next();
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}
//export default auth(req,res,next);

//export modules = auth;
module.exports = auth