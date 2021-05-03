import User from "../models/user.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import resStatus from "./resStatus.js"
dotenv.config();
const SECRET_JWT = process.env.SECRET_TOKEN;

 const Data =  (req, res) => {
    const {token} = req.query;
    const user = jwt.verify(token, SECRET_JWT);
    const userUsername = user.username;
    User.findOne({username: userUsername}).then(data => {
        res.send(data)

    })
}


const ChangePassword =  (req,res) => {
    const {token, newPassword, oldPassword} = req.body;
    const user = jwt.verify(token, SECRET_JWT);
    const userUsername = user.username;
    try {
        User.findOne({username:userUsername}, async (error, userToUpdate) => {
            if(error) {
                res.status(500).send(err);
                return;
            }
            if(oldPassword == userToUpdate.password){
                userToUpdate.password = newPassword;
                await userToUpdate.save();
                res.status(201).json(resStatus.succes("Your password has been changed"))
                return;
            }
            res.status(400).json(resStatus.fail("Your old password is incorrect"))
        })
        
    } catch (error) {
        res.status(500).send(err);
    }
 
}

const DeleteAccount =  (req, res) => {
    const {token, password} = req.body;
    const user = jwt.verify(token, SECRET_JWT);
    const userUsername = user.username;
    try {
        User.findOne({username:userUsername}, async (error, userToDelete) =>  {
            if(error) {
                res.status(500).send(err);
                return;
            }
            if(password == userToDelete.password){
                await User.deleteOne({username:userUsername});
                res.status(201).json(resStatus.succes("Your account has been deleted"))
                return;
            }
            res.status(400).json(resStatus.fail("Your old password is incorrect"))
        })
        
    } catch (error) {
        res.status(500).send(err);
    }
}

export{Data, ChangePassword, DeleteAccount}


