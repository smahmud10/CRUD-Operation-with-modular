import { Router } from "express";
import { authController } from "./auth.controller";

const router = Router();
const authRouter = router;

router.post("/login",authController.loginUSer)




export default authRouter;