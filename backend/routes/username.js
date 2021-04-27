import express from "express";
import User from "./../models/user.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
//initializing dotenv for Secret Token
dotenv.config();
const router = express.Router();
const SECRET_JWT = process.env.SECRET_TOKEN;
//Sending all data from a user to frontend
router.post('/', (req,res) => {
    const {token} = req.body;
    const user = jwt.verify(token, SECRET_JWT);
     const userUsername = user.username;
    User.findOne({username: userUsername}).then(data => {
        res.send(data)
    })
})

export default router;