import express from "express";
import Login from "./../models/user.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const router = express.Router();
const SECRET_JWT = process.env.SECRET_TOKEN;

router.post('/', (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    Login.findOne({username})
    .then(user =>{
        if (user){
            if(user.password === password){
                
                const token = jwt.sign({
                    id: user._id,
                    username: user.username
                }, SECRET_JWT)
                res.status(200).json({
                    status: "SUCCES",
                    message: "You have been logged in",
                    token: token
                })
            }
            else{
                res.status(200).json({
                    status: "FAILED",
                    message: "Wrong password"
                })
            }
        }
        else{
            res.status(200).json({
                status: "FAILED",
                message: "Account doesn't exists"
            })
        }
    })  
    .catch(err => {
        res.status(500).json({
            status: "FAILED",
            message: "err"
        })
        console.log(err)
    })
})

export default router;