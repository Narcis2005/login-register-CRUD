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
            }
            if(oldPassword == userToUpdate.password){
                userToUpdate.password = newPassword;
            userToUpdate.save();
            res.status(201).json({
                status: "SUCCES",
                message: "Your password has been changed"
            })
            }
            else{
                res.status(201).json({
                    status: "Failed",
                    message: "Your old password is incorrect"
                })
            }
            
        })
        
    } catch (error) {
        res.status(500).send(err);
    }
 
}
export function Register (req, res) {
    const user = new User();
    //Storing the info from the frontend
    const username =  req.body.username;
    user.username = username;
    user.password = req.body.password;
    user.email = req.body.email;
    //Creating the user
    User.findOne({username}, (err, userFounded) => {
        if(userFounded){
            res.status(201).json({
                status: "SUCCES",
                message: "Username aleardy exists"
            })
        }
        else{
            user.save((err) => {
                if(err){
                    res.status(500).send(err);
                }
                else{
                    res.status(201).json({
                        status: "SUCCES",
                        message: "Your account has been created"
                    })
                }
                
            })
        }
    })
 
}


export function Login (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    User.findOne({username})
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
        res.status(500).send(err);
        console.log(err)
    })
}
