// src/routes/book.route.ts

import { Router } from "express";
import { getAllBooks, addNewBook, getBookById, updateBookById, deleteBookById } from "../controllers/book.controller";
import { Verification } from "../middleware/auth";

const router = Router();

router.get("/", Verification, getAllBooks); // Get all books
router.get("/:id", Verification, getBookById);
router.post("/", Verification, addNewBook); // Add new book
router.patch("/:id", Verification, updateBookById);
router.delete("/:id", Verification, deleteBookById);

export default router;
