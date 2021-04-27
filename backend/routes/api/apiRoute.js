import express from "express";
import {Login, Data, Register, ChangePassword} from "../../controllers/apiController.js"

const router = express.Router();


router.post('/login', Login);
router.post('/data', Data);
router.post('/register', Register);
router.put('/change-password', ChangePassword)

export default router;