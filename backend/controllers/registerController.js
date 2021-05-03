import User from "../models/user.js";
import resStatus from "./resStatus.js"

 const Register = (req, res) => {
    const user = new User();

    //Storing the info from the frontend

    const username =  req.body.username;
    user.username = username;
    user.password = req.body.password;
    user.email = req.body.email;

    //Creating the user

    User.findOne({username}, async (err, userFounded) => {
        if(userFounded){
            res.status(400).json(resStatus.fail("Username aleardy exists"))
            return;
        }

       await user.save(err => {
            if(err){
                res.status(500).send(err);
                return;
            }
            res.status(201).json(resStatus.succes("Your account has been created"))
        })
    })
}


export default (Register)