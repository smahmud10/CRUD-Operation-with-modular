import { Result } from 'pg';
import type { Request, Response } from "express";
import { authServices } from './auth.services';

const loginUSer = async (req: Request, res: Response) => {
    const {email,password} = req.body;

    try {
    const result = await authServices.loginUSer(email,password);


    res.status(200).json({
      succes: true,
      message: "Login successfull",
      data: result,
    });
  } catch (err: any) {
    res.status(201).json({
      succes: false,
      message: err.message,
    });
  }
};
 export const authController = {
    loginUSer
 }