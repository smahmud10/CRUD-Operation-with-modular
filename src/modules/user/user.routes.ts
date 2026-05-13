import express, { type Request, type Response } from "express"
import { pool } from "../../config/db";
import { userControllers } from "./user.contrller";

const router = express.Router();

router.post( "/", userControllers.createUser)

router.get( "/", userControllers.getUser)

router.get( "/:id", userControllers.getSingleUser)

router.put("/:id" , userControllers.updateUser)

router.delete("/:id",userControllers.deleteUser)

export const userRouter = router;