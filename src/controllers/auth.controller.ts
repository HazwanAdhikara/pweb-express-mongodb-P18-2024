import { Request, Response } from "express";
import { isEmailAllReadyExist, NewUser } from "../services/auth.service";

export const Register = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const { name, email, password } = user;
    const checkEmail = isEmailAllReadyExist(email);
    if (checkEmail) {
      res.status(400).json({
        // 400 Code means Bad Request
        status: 400,
        message: "Email all ready in use",
      });
      return;
    }
    const newUser = NewUser(email, name, password);
    res.status(200).json({
      // 200 means Success
      status: 201, // 201 means Successfully Created
      success: true,
      message: " User created Successfully",
      user: newUser,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({
      status: 400,
      message: error.message.toString(),
    });
  }
};
