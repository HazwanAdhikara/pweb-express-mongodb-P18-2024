// src/routes/mechanism.route.ts
import { Router } from "express";
import MechanismController from "../controllers/mechanism.controller";
import { Verification } from "../middleware/auth";

const router = Router();

router.post("/borrow/:id", MechanismController.borrowBook);
router.post("/return/:id", MechanismController.returnBook);

export default router;
