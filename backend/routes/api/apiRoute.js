import express from "express";
import { Data, ChangePassword, DeleteAccount} from "../../controllers/profileController.js";
import Login from "../../controllers/authController.js";
import Register from "../../controllers/registerController.js"

const router = express.Router();


router.post("/login", Login);
router.get("/data", Data);
router.post("/register", Register);
router.put("/change-password", ChangePassword)
router.delete("/delete-account", DeleteAccount)

export default router;