import { Router } from "express";
import MechanismController from "../controllers/mechanism.controller";
import { Verification } from "../middleware/auth";

const router = Router();

router.post("/borrow/:id", Verification, MechanismController.borrowBook);
router.post("/return/:id", Verification, MechanismController.returnBook);

export default router;
