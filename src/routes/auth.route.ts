import { Router } from "express";
export const authRouter = Router();

import { Register } from "../controllers/auth.controller";

authRouter.post("/register", Register);
