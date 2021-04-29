import User from "../models/user.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import resStatus from "./resStatus.js"
dotenv.config();
const SECRET_JWT = process.env.SECRET_TOKEN;

const sendToken = (id, username) => {
    const token = jwt.sign({
        id: id,
        username: username
    }, SECRET_JWT)
    return token;
}


const Login = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    User.findOne({username})
        .then(user => {
            if (user){
                if(user.password === password){
                    res.status(200).json(resStatus.succes("You have been logged in", sendToken(user._id, user.username)))
                    return;
                }
                res.status(200).json(resStatus.fail("Wrong password"))
                return;
            }
            res.status(400).send(resStatus.fail("Account doesn't exists"))
        })  
        .catch(err => {
            res.status(500).send(err);
            console.log(err)
        })
}

export default Login;