import express from "express";
import validateRequest from "../middlewares/validate.js";
import { loginSchema, registerSchema } from "../validators/userValidator.js";
import { loginUser, registerUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", validateRequest(registerSchema), registerUser);
router.post("/login", validateRequest(loginSchema), loginUser);

export default router;
