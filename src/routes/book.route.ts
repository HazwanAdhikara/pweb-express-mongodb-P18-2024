// src/routes/book.route.ts

import { Router } from 'express';
import { getAllBooks, addNewBook} from '../controllers/book.controller';

const router = Router();

router.get('/', getAllBooks); // Get all books
router.post('/', addNewBook); // Add new book

export default router;
