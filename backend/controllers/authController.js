import User from "../models/user.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const SECRET_JWT = process.env.SECRET_TOKEN;

function sendToken (id, username) {
    const token = jwt.sign({
        id: id,
        username: username
    }, SECRET_JWT)
    return token;
}


export default function Login (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    User.findOne({username})
        .then(user =>{
            if (user){
                if(user.password === password){
                    res.status(200).json({
                        status: "SUCCES",
                        message: "You have been logged in",
                        token: sendToken(user._id, user.username)
                    })
                    return;
                }
                res.status(200).json({
                    status: "FAILED",
                    message: "Wrong password"
                })
                return;
            }
            res.status(400).json({
                status: "FAILED",
                message: "Account doesn't exists"
            })
        })  
        .catch(err => {
            res.status(500).send(err);
            console.log(err)
        })
}