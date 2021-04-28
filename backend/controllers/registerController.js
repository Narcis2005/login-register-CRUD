import User from "../models/user.js";

export default function Register (req, res) {
    const user = new User();
    //Storing the info from the frontend
    const username =  req.body.username;
    user.username = username;
    user.password = req.body.password;
    user.email = req.body.email;
    //Creating the user
    User.findOne({username}, (err, userFounded) => {
        if(userFounded){
            res.status(400).json({
                status: "FAILED",
                message: "Username aleardy exists"
            })
            return;
        }

        user.save((err) => {
            if(err){
                res.status(500).send(err);
                return;
            }
            
            res.status(201).json({
                status: "SUCCES",
                message: "Your account has been created"
            })
        })
    })
}