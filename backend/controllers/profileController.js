import User from "../models/user.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const SECRET_JWT = process.env.SECRET_TOKEN;

export function Data (req, res) {
    const {token} = req.body;
    const user = jwt.verify(token, SECRET_JWT);
    const userUsername = user.username;
    User.findOne({username: userUsername}).then(data => {
        res.send(data)

    })
}


export function ChangePassword (req,res) {
    const {token, newPassword, oldPassword} = req.body;
    const user = jwt.verify(token, SECRET_JWT);
    const userUsername = user.username;
    try {
        User.findOne({username:userUsername}, (error, userToUpdate) => {
            if(error) {
                res.status(500).send(err);
                return;
            }
            if(oldPassword == userToUpdate.password){
                userToUpdate.password = newPassword;
                userToUpdate.save();
                res.status(201).json({
                    status: "SUCCES",
                    message: "Your password has been changed"
                })
                return;
            }
            res.status(400).json({
                status: "Failed",
                message: "Your old password is incorrect"
            })
        })
        
    } catch (error) {
        res.status(500).send(err);
    }
 
}




