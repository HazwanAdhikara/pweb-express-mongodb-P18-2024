// src/routes/book.route.ts

import { Router } from "express";
import { getAllBooks, addNewBook } from "../controllers/book.controller";
import { Verification } from "../middleware/auth";

const router = Router();

router.get("/", Verification, getAllBooks); // Get all books
router.post("/", Verification, addNewBook); // Add new book

export default router;
