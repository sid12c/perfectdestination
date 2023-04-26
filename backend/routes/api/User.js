const express = require("express");
const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");
const User = require('../../models/User');



/*const auth = async (req, res, next) => {
  try {
        const token = req.header("x-auth-token");
        if (!token)
            return res
            .status(401)
            .json({msg: "No auth token, access denied"});
        const verified = jwt.verify(token, "passwordKey");
        if (!verified)
            return res
            .status(401)
            .json({msg: "Token verification failed, authroization denied"});
        // since the token was made out of document id 
        req.user = verified.id;
        next();
    } catch (err) {
        res.status(500).json({error: err.message});
    }
   
};
function auth (req, res, next) {
   try {
        const token = req.header("x-auth-token");
        if (!token)
            return res
            .status(401)
            .json({msg: "No auth token, access denied"});
        const verified = jwt.verify(token, "passwordKey");
        if (!verified)
            return res
            .status(401)
            .json({msg: "Token verification failed, authroization denied"});
        // since the token was made out of document id 
        req.user = verified.id;
        next();
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}*/
// Signup route
userRouter.post("/Signup", async (req, res) => {
    try {
        const {email, password, confirmPassword, username} = req.body;
        if (!email || !password || !username || !confirmPassword) {
            return res.status(400).json({msg: "Please enter all the fields"});
        }
        if (password.length < 6) {
            return res
            .status(400)
            .json({msg: "Password should be at least 6 characters"});
        }
        if (confirmPassword !== password) {
            return res.status(400).json({msg: "Both the passwords don't match"});
        }
        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res
            .status(400)
            .json({msg: "User with the same email already exists"});
        }
        const hashedPassword = await bcryptjs.hash(password, 8);
        const newUser = new User({email, password: hashedPassword, username});

        const savedUser = await newUser.save();
        console.log(savedUser.username);
        res.json(savedUser);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

// Login route
userRouter.post("/login", async (req, res) => {
    try {
        const {username, password} = req.body;
        if (!username || !password) {
            return res.status(400).json({msg: "Please enter all the fields"});
        }
        const user = await User.findOne({username});
        if (!user) {
            return res
            .status(400)
            .json({msg: "User with this username does not exist"});
        }
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send({msg: "Incorrect password"})
        }
        const token = jwt.sign({id: user._id}, "passwordKey");
        res.json({token, user: {id: user._id, username: user.username}});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

userRouter.post("/tokenIsValid", async (req, res) => {
    try {
        const token = req.header("x-auth-token");
        if (!token) return res.json(false);
        const verified = jwt.verify(token, "passwordKey");
        if (!verified) return res.json(false);
        const user = await User.findById(verified.id);
        if (!user) return res.json(false);
        return res.json(true);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

// to get the users credentials

userRouter.get("/", auth, async(req, res) => {
    try {
      const user = await User.findById(req.user);
      if (!user) {
        return res.status(404).json({ noitemfound: "No User found" });
      }
      res.json({
        username: user.username,
        id: user._id,
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });
  
module.exports = userRouter;