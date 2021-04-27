import express from "express";
import Register from "../models/user.js";

const router = express.Router();

//Register
router.post('/', (req,res) => {
    const register = new Register();
    //Storing the info from the frontend
    register.username = req.body.username;
    register.password = req.body.password;
    register.email = req.body.email;
    //Creating the user
    register.save((err) => {
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
})

export default router;